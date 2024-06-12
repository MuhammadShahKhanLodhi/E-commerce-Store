import React from 'react'
import 'animate.css';

export default function CategoryDropdown() {
  return (
    <div className='bg-slate-800 text-white animate__animated animate__fadeInUp w-[170px] ml-32 rounded-b-lg mt-44 p-5 border-t-4 border-secondary'>
        <ul>
            <li className='hover:translate-x-2 hover:text-primary duration-200 my-1'><a href='blog.com'>Blog</a></li>
            <li className='hover:translate-x-2 hover:text-primary duration-200 my-1'><a href='blog.com'>Blog Categories</a></li>
            <li className='hover:translate-x-2 hover:text-primary duration-200 my-1'><a href='blog.com'>Write A Blog</a></li>
        </ul>
    </div>
  )
}