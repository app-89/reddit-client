import React, { useState } from 'react';
import styles from '../styles/Sidebar.module.css';

const Sidebar = ({ subreddits, onSelectSubreddit, isOpen, onToggle }) => {
  const [showMore, setShowMore] = useState(false);

  const displayedSubreddits = showMore ? subreddits : subreddits.slice(0, 5);

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <h2>Subreddits</h2>
        <button 
          className={styles.toggleBtn} 
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.subredditList}>
          {displayedSubreddits.map((subreddit) => (
            <li key={subreddit.id || subreddit.name}>
              <button
                className={styles.subredditBtn}
                onClick={() => onSelectSubreddit(subreddit)}
              >
                <span className={styles.icon}>r/</span>
                <span className={styles.name}>{subreddit.name}</span>
              </button>
            </li>
          ))}
        </ul>

        {subreddits.length > 5 && (
          <button
            className={styles.showMoreBtn}
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Show Less' : `Show More (${subreddits.length - 5})`}
          </button>
        )}
      </nav>

      <div className={styles.footer}>
        <button className={styles.primaryBtn}>+ New Post</button>
      </div>
    </div>
  );
};

export default Sidebar;
