import { createSlice } from '@reduxjs/toolkit'

// Define the initial state for the posts slice
const initialState = {
  items: [],
  isLoading: false,
  error: null,
  selectedPost: {
    id: "",
    title: "",
    comments: []
  }
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default postsSlice.reducer;