"use client"
import React, { useEffect, useState } from 'react';


async function getPosts() {
  
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}

export default function Bai4() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  const refreshPosts = () => {
    getPosts().then(setPosts);
  };

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <button onClick={refreshPosts}>Refresh</button>
      <ul>
        {posts.map((item:any) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
