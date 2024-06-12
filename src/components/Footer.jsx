import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Logo from '../assets/Images/Logo.png'

export default function Footer() {
  return (
    <footer className='w-screen sm:h-[50vh] h-fit bg-slate-800 text-white'>
        <div className="container flex items-start pt-20 sm:flex-row flex-col justify-between w-full h-full">
            <div className='sm:w-1/6 w-1/3'>
                <img src={Logo} alt='Heritage Homes Logo' className='w-20 mb-4' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className='flex justify-around items-center w-full mt-4'>
                    <a href='facebook'><FaFacebook className='scale-150'/></a>
                    <a href='instagram'><FaInstagram className='scale-150'/></a>
                    <a href='twitter'><FaXTwitter className='scale-150'/></a>
                    <a href='tiktok'><FaTiktok className='scale-150'/></a>
                </div>
            </div>
            <div className='text-slate-400'>
                <h3 className='text-xl sm:mb-3 mt-10 mb-3'>Categories</h3>
                <ul className='text-sm'>
                    <li className='hover:underline mb-1'><a href='sofas'>Sofas</a></li>
                    <li className='hover:underline mb-1'><a href='chairs'>Chairs</a></li>
                    <li className='hover:underline mb-1'><a href='tables'>Tables</a></li>
                    <li className='hover:underline mb-1'><a href='sidetables'>Side Tables</a></li>
                    <li className='hover:underline mb-1'><a href='beds'>Beds</a></li>
                    <li className='hover:underline mb-1'><a href='bookshelves'>Book Shelves</a></li>
                </ul>
            </div>
            <div className='text-slate-400'>
                <h3 className='text-xl sm:mb-3 mt-10 mb-3'>Blog</h3>
                <ul className='text-sm'>
                    <li className='hover:underline mb-1'><a href='blog'>Blog</a></li>
                    <li className='hover:underline mb-1'><a href='blog'>Blog Categories</a></li>
                    <li className='hover:underline mb-1'><a href='blog'>Write A Blog</a></li>
                </ul>
            </div>
            <div className='text-slate-400 mb-10'>
                <h3 className='text-xl sm:mb-3 mt-10 mb-3'>Contact Info</h3>
                <div className='text-sm'>
                    <p className='mb-2'>emailaddress@email.com</p>
                    <p className='mb-2'>(123) 456-789</p>
                    <p className='mb-2'>123 Anywhere St, Any City, ST 12345</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
