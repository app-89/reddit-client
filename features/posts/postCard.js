import React from "react";
import { useDispatch } from "react-redux";
import { selectPost } from "./postsSlice";

const postCard = ({ post }) => {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(selectPost(post.id))}>
      <h3>{post.title}</h3>
      <p>👍 {post.ups}</p>
    </div>
  );
};
export default postCard;