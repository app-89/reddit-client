import React from 'react';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#ff4500', padding: '10px', color: 'white' }}>
      <h1>DevFeed</h1>
      <nav>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
          <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li><a href="/subreddits" style={{ color: 'white', textDecoration: 'none' }}>Subreddits</a></li>
          <li><a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;