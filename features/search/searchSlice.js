import { createSlice } from '@reduxjs/toolkit'

// Define the initial state for the search slice
const initialState = {
  term: "",
  results: [],
  isLoading: false,
  error: null
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.term = action.payload;
    },
    setSearchResults: (state, action) => {
      state.results = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export default searchSlice.reducer;