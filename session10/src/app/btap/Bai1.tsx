import React from 'react'
async function getPost(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}
export default async function Bai1() {
    const posts = await getPost();
  return (
    <div>Danh sách bài viết
        {posts.map((item:any)=>{
            return <li key={item.title}>{item.body}
            <p>{item.body.substring(0, 100)}...</p>
            </li>
            
        })}
    </div>
  )
}
