import React from "react";
import { useSelector } from "react-redux";
import CommentsList from "./CommentsList";

const postDetail = () => {
  const post = useSelector(state => state.posts.selectedPost);
  if (!post) return null;
  return (
    <div className="modal">
      <h2>{post.title}</h2>
      <CommentsList comments={post.comments} />
    </div>
  );
};

export default postDetail;