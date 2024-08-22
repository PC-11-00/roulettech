# Blog Application

This project is a simple blog application with a Django backend and a React.js frontend. The application allows users to create, view, update, and delete blog posts.

## Table of Contents

- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
- [Backend](#backend)
- [Installation](#installation)
- [Running the Application](#running-the-application)

## Project Structure

### Frontend (`frontend/`)

- `src/components/` - Contains React components.
- `src/api.js` - API utility for making requests.
- `src/App.js` - Main application component.
- `src/PostList.js` - Component for displaying the list of posts.
- `src/PostDetail.js` - Component for displaying details of a specific post.
- `src/PostForm.js` - Component for creating a new post.

### Backend (`backend/`)

- `blog/` - Contains the Django application code.
- `blog/models.py` - Defines the `BlogPost` model.
- `blog/views.py` - Contains API view logic.
- `blog/urls.py` - Defines URL routes for API endpoints.
- `blog/serializers.py` - Serializes the `BlogPost` model data.

## API Endpoints

### Frontend (React.js)

The frontend interacts with the following API endpoints:

- **GET** `/api/posts/` - Retrieve all blog posts.
- **POST** `/api/posts/` - Create a new blog post.
- **GET** `/api/posts/:id/` - Retrieve a specific blog post by ID.
- **PUT** `/api/posts/:id/` - Update a specific blog post by ID.
- **DELETE** `/api/posts/:id/` - Delete a specific blog post by ID.

### Backend (Django)

The backend provides the following API endpoints:

- **GET** `/api/posts/` - Retrieve all blog posts.
- **POST** `/api/posts/` - Create a new blog post.
- **GET** `/api/posts/:id/` - Retrieve a specific blog post by ID.
- **PUT** `/api/posts/:id/` - Update a specific blog post by ID.
- **DELETE** `/api/posts/:id/` - Delete a specific blog post by ID.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed for the frontend.
- [Python](https://www.python.org/) and [pip](https://pip.pypa.io/en/stable/) installed for the backend.
- [Django](https://www.djangoproject.com/) installed for the backend.

### Frontend

1. Navigate to the `frontend/` directory:
   ```bash
    cd frontend
   
    npm install

    cd backend
    
    python -m venv env

    source env/bin/activate

    python manage.py runserver

    npm start


