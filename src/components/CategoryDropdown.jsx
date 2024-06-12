import React from 'react'
import 'animate.css';

export default function CategoryDropdown() {
  return (
    <div className='bg-slate-800 rounded-b-lg text-white animate__animated animate__fadeInUp w-[170px] ml-24 mt-64 p-5 border-t-4 border-secondary'>
        <ul>
            <li className='hover:translate-x-2 hover:text-primary duration-200 my-1'><a href='blog.com'>Sofas</a></li>
            <li className='hover:translate-x-2 hover:text-primary duration-200 my-1'><a href='blog.com'>Chairs</a></li>
            <li className='hover:translate-x-2 hover:text-primary duration-200 my-1'><a href='blog.com'>Tables</a></li>
            <li className='hover:translate-x-2 hover:text-primary duration-200 my-1'><a href='blog.com'>Side Tables</a></li>
            <li className='hover:translate-x-2 hover:text-primary duration-200 my-1'><a href='blog.com'>Beds</a></li>
            <li className='hover:translate-x-2 hover:text-primary duration-200 my-1'><a href='blog.com'>Book Shelves</a></li>
        </ul>
    </div>
  )
}

