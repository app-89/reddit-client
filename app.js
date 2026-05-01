import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const initialState = {
  posts: {
    items: [],
    isLoading: false,
    error: null,
    selectedPost: null
  },

  subreddits: {
    list: [
      { name: "programming", label: "Programming" },
      { name: "webdev", label: "WebDev" },
      { name: "reactjs", label: "React" },
      { name: "javascript", label: "JavaScript" },
      { name: "learnprogramming", label: "Learn Programming" }
    ],
    selected: "programming"
  },

  search: {
    term: "",
    results: [],
    isLoading: false,
    error: null
  }
}

function posts(state = initialState.posts, action) {
  switch (action.type) {
    case 'SET_POSTS':
      return {
        ...state,
        items: action.payload,
        isLoading: false,
        error: null
      };
    default:
      return state;
  }
}

function subreddits(state = initialState.subreddits, action) {
  switch (action.type) {
    // Add subreddit-related actions here
    default:
      return state;
  }
}

function search(state = initialState.search, action) {
  switch (action.type) {
    // Add search-related actions here
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
  subreddits,
  search
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;