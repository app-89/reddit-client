// Helper to validate Reddit API response shape
function validateRedditResponse(json) {
  if (!json?.data?.children || !Array.isArray(json.data.children)) {
    throw new Error('Unexpected Reddit response shape');
  }
}

export const fetchPosts = async (subreddit) => {
  try {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=25`);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();

    validateRedditResponse(json);

    return json.data.children.map((child) => child.data);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('fetchPosts error', error);
    }
    throw error;
  }
};

export const fetchSearchResults = async (term) => {
  try {
    const response = await fetch(`https://www.reddit.com/search.json?q=${encodeURIComponent(term)}&limit=25`);

    if (!response.ok) {
      throw new Error(`Failed to fetch search results: ${response.status} ${response.statusText}`);
    }

    const json = await response.json();

    validateRedditResponse(json);

    return json.data.children.map((child) => child.data);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('fetchSearchResults error', error);
    }
    throw error;
  }
};