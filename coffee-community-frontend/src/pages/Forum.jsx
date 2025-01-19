import React from "react";
import "./Forum.css";

const Forum = () => {
  // Hardcoded posts
  const posts = [
    {
      id: 1,
      title: "What's your favorite coffee shop?",
      author: "CoffeeLover123",
      content: "I love exploring new cafes in town. Any recommendations?",
      timestamp: "January 19, 2025, 10:00 AM",
    },
    {
      id: 2,
      title: "Best coffee brewing methods?",
      author: "BaristaExpert",
      content: "Which brewing method do you prefer? I'm a big fan of pour-over.",
      timestamp: "January 18, 2025, 5:45 PM",
    },
  ];

  return (
    <div className="forum-container">
      <h1>Forum</h1>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-author">Posted by: {post.author}</p>
            <p className="post-timestamp">{post.timestamp}</p>
            <p className="post-content">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
