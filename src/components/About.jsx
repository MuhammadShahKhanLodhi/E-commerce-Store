import React from 'react'
import BgImage from '../assets/Images/Background2.jpg'
import 'animate.css';

export default function About() {
  return (
    <div className='grid sm:grid-rows-1 grid-rows-2 sm:grid-cols-2 grid-cols-1 w-screen h-fit text-slate-800 bg-primary'>
      <img src={BgImage} alt="Background Image" className='w-full ' />
      <div className='w-full xl:px-40 md:px-16 sm:px-3 px-4 flex justify-center items-center flex-col h-full gap-4'>
        <h2 className='lg:text-3xl text-xl font-semibold'>Transform Your Space with Timeless Elegance</h2>
        <p className='lg:text-base text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at efficitur leo. Quisque eget purus sit amet ex faucibus fringilla. Sed dapibus, quam nec hendrerit porta, tellus nisi laoreet nisi, id porttitor augue velit a lacus. Maecenas tincidunt vehicula dui, eu malesuada nisi elementum eget. Fusce tristique augue et lectus pharetra cursus. Integer leo risus, sollicitudin sit amet est vel.</p>
        <button className='bg-slate-800 hover:bg-slate-950 duration-200 lg:text-sm text-xs p-2 md:w-28 w-fit xs:mb-0 mb-6 rounded-lg text-white'>Learn More</button>
      </div>
    </div>
  )
}
