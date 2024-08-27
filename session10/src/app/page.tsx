import React from 'react'
import Bai1 from './Baitap/Bai1'
import Bai2 from './Baitap/[id]/Bai2'
import Bai3 from './Baitap/Bai3'
import Bai4 from './Baitap/Bai4'
import Bai5 from './Baitap/Bai5'
import Bai6 from './Baitap/Bai6'

export default function page() {
  /*
    reactjs 
    cơ chế render dữ liệu ReactJs
    NextJs
    hỗ trợ vừa render dữ liệu ở phía client và phía server
    1. server component: mặc định khi tạo trang
    2. client component: dùng "use client " khi nào nên dùng:
      - cần tương tấc dữ liệu dùng ( useState, useEffect, các sự kiện onClick, onChange)

    Cách render dữ liệu ở trong NextJs
    1. render dữ liệu ở phía server
  */
  return (
    <div>
      <Bai1></Bai1>
      <hr />
      <Bai2></Bai2>
      <hr />
      <Bai3></Bai3>
      <hr />
      <Bai4></Bai4>
      <hr />
      <Bai5></Bai5>
      <hr />
      <Bai6></Bai6>
      <hr />
      
    </div>
  )
}
