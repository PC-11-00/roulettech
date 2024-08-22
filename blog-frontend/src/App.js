// src/App.js
import React, { useState, useCallback, useEffect } from 'react';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import './App.css';
import api from './api';

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchPosts = useCallback(() => {
    api.get('/posts/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error);
      });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const selectPost = (id) => {
    setSelectedPostId(id);
  };

  const deselectPost = () => {
    setSelectedPostId(null);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <h1>My Blog</h1>
      <button onClick={toggleForm}>
        {showForm ? 'Cancel' : 'Create New Post'}
      </button>
      {showForm && <PostForm refreshPosts={fetchPosts} />}
      {selectedPostId ? (
        <PostDetail postId={selectedPostId} deselectPost={deselectPost} />
      ) : (
        <PostList posts={posts} selectPost={selectPost} />
      )}
    </div>
  );
}

export default App;
