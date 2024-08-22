// src/components/PostForm.js
import React, { useState } from 'react';
import api from '../api';
import './PostForm.css';

const PostForm = ({ refreshPosts }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/posts/', formData)
      .then(() => {
        refreshPosts(); // Update the list of posts
        setFormData({
          title: '',
          content: ''
        });
      })
      .catch(error => {
        console.error('There was an error creating the post!', error);
      });
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handleInputChange}
        placeholder="Content"
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
