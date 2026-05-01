import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

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