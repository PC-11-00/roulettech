// src/components/PostList.js
import React from 'react';
import './PostList.css';

const PostList = ({ posts, selectPost }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <div 
          key={post.id} 
          className="post-box"
          onClick={() => selectPost(post.id)}
        >
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 100)}{post.content.length > 100 ? '...' : ''}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
