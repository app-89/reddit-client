import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import PostCard from './PostCard';

const postsList = () => {
  const { items, isLoading, error } = useSelector(state => state.posts);
  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;
  return (
    <div>
      {items.map(post => (
        <postCard key={post.id} post={post} />
      ))}
    </div>
  );
};
export default postsList;