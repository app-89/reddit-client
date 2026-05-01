import { createSlice } from '@reduxjs/toolkit'

// Define the initial state for the subreddits slice
const initialState = {
  list: [],
  // Default selected subreddit; can be configured via environment variable REACT_APP_DEFAULT_SUBREDDIT
    selected: process.env.REACT_APP_DEFAULT_SUBREDDIT || "programming"
}

const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
    setSubreddits: (state, action) => {
      state.list = action.payload;
      // Reset selected if it's not in the new list
      if (!state.list.some(sub => sub === state.selected)) {
        state.selected = state.list.length > 0 ? state.list[0] : "";
      }
    },
    setSelectedSubreddit: (state, action) => {
      state.selected = action.payload;
    }
  }
});

export default subredditsSlice.reducer;