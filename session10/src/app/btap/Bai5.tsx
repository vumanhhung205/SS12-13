"use client"
import React, { useEffect, useState } from 'react';

async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/nonexistent-url');
    const data = await res.json();
    return data;
  
}

export default function Bai5() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((err) => setError(err.message));
  }, []);


  const refreshPosts = () => {
    setError(null);
    getPosts()
      .then(setPosts)
      .catch((err) => setError(err.message));
  };

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <button onClick={refreshPosts}>Refresh</button>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {posts.map((item:any) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body.substring(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
