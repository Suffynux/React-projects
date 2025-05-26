import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetail = () => {
  // Sample blog data
  const data   = {
    posts: [
      {
        id: 1,
        title: 'His mother had always taught him',
        body: "His mother had always taught him not to ever think of himself as better than others...",
        tags: ['history', 'american', 'crime'],
        reactions: { likes: 192, dislikes: 25 },
        views: 305,
        userId: 121,
      },
      {
        id: 2,
        title: 'He was an expert but not in a discipline',
        body: 'He was an expert but not in a discipline that anyone could fully appreciate...',
        tags: ['french', 'fiction', 'english'],
        reactions: { likes: 859, dislikes: 32 },
        views: 4884,
        userId: 91,
      },
      {
        id: 3,
        title: 'Dave watched as the forest burned up on the hill.',
        body: 'Dave watched as the forest burned up on the hill...',
        tags: ['magical', 'history', 'french'],
        reactions: { likes: 1448, dislikes: 39 },
        views: 4152,
        userId: 16,
      },
      {
        id: 4,
        title: 'All he wanted was a candy bar.',
        body: "All he wanted was a candy bar...",
        tags: ['mystery', 'english', 'american'],
        reactions: { likes: 359, dislikes: 18 },
        views: 4548,
        userId: 47,
      },
      {
        id: 5,
        title: 'Hopes and dreams were dashed that day.',
        body: 'Hopes and dreams were dashed that day...',
        tags: ['crime', 'mystery', 'love'],
        reactions: { likes: 119, dislikes: 30 },
        views: 626,
        userId: 131,
      },
    ],
  };

  // Extract blog ID from URL
  const path = useLocation().pathname.split('/');
  const currentBlogID = parseInt(path[2]); // Convert to number for comparison

  // Find the blog post with the matching ID
  const currentBlog = data.posts.find((blog) => blog.id === currentBlogID);

  // If blog not found
  if (!currentBlog) {
    return <div>Blog not found!</div>;
  }

  return (
    <div>
      <h1>{currentBlog.title}</h1>
      <p>{currentBlog.body}</p>
      <p><strong>Views:</strong> {currentBlog.views}</p>
      <p><strong>Tags:</strong> {currentBlog.tags.join(', ')}</p>
      <p><strong>Likes:</strong> {currentBlog.reactions.likes}</p>
      <p><strong>Dislikes:</strong> {currentBlog.reactions.dislikes}</p>
    </div>
  );
};

export default BlogDetail;
