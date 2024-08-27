import React from 'react'
async function getPost(){
    const res = await fetch('https://jsonplaceholder.typicode.com/postss');
    const data = await res.json();
    return data;
}
export default async function Bai2() {
    const posts = await getPost();
  return (
    <div>Chi tiết bài viết
        {posts.map((item:any)=>{
            return <li key={item.title}>{item.body}
            <p>{item.body.substring(0, 100)}...</p>
            </li>
        })}
    </div>
  )
}
