# DevFeed

A clean, developer-focused Reddit client built for browsing programming-related communities.

---

## Overview

**DevFeed** is a streamlined Reddit client that surfaces high-quality content from developer-centric subreddits like:

* r/programming
* r/webdev
* r/reactjs
* r/javascript
* r/learnprogramming

It focuses on readability, performance, and a smooth user experience—making it ideal for developers who want to stay informed without distractions.

---

## Project Structure

src/
│
├── app/
│   └── store.js
│
├── features/
│   ├── posts/
│   │   ├── postsSlice.js
│   │   ├── postsList.js
│   │   ├── postCard.js
│   │   └── postDetail.js
│   │
│   ├── subreddits/
│   │   ├── subredditsSlice.js
│   │   └── SubredditList.js
│   │
│   ├── search/
│   │   ├── searchSlice.js
│   │   └── SearchBar.js
│
├── components/
│   ├── Header.js
│   ├── Sidebar.js
│   ├── Loader.js
│   ├── ErrorMessage.js
│
├── services/
│   └── redditApi.js
│
├── utils/
│   └── helpers.js
│
├── App.js
├── index.js
└── styles/
    └── global.css

---

## Future Improvements

* Dark mode toggle
* Bookmark/save posts
* User authentication
* Custom subreddit subscriptions
* Caching API responses

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm start
