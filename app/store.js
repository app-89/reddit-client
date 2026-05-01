import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import subredditsReducer from '../features/subreddits/subredditsSlice';
import searchReducer from '../features/search/searchSlice';

const configureAppStore = ({ initialStore = {} } = {}) => {
  const store = configureStore({
    preloadedState: initialStore,
    reducer: {
      posts: postsReducer,
      subreddits: subredditsReducer,
      search: searchReducer,
    },
  });
  return store;
};

export default configureAppStore;