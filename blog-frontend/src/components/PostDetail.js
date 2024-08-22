// src/components/PostDetail.js
import React, { useState, useEffect } from 'react';
import api from '../api';
import './PostDetail.css'; // Make sure to create this CSS file

const PostDetail = ({ postId, deselectPost }) => {
  const [post, setPost] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    api.get(`/posts/${postId}/`)
      .then(response => {
        setPost(response.data);
        setFormData({
          title: response.data.title,
          content: response.data.content,
        });
      })
      .catch(error => {
        console.error('There was an error fetching the post!', error);
      });
  }, [postId]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    api.put(`/posts/${postId}/`, formData)
      .then(response => {
        setPost(response.data);
        setEditing(false);
      })
      .catch(error => {
        console.error('There was an error updating the post!', error);
      });
  };

  const handleDelete = () => {
    api.delete(`/posts/${postId}/`)
      .then(() => {
        deselectPost();
      })
      .catch(error => {
        console.error('There was an error deleting the post!', error);
      });
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail">
      {editing ? (
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={deselectPost}>Back to List</button>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
