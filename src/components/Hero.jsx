import React from 'react'
import BgImage from '../assets/Images/Background.jpg'

const bgStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}

export default function Hero() {
  return (
    <main style={bgStyle} className='h-screen w-screen'>
        <div className="container flex md:items-end items-center sm:justify-start justify-center w-full h-full">
            <div className='h-fit md:w-96 w-72 md:p-12 p-7 bg-secondary text-white md:mb-7'>
                <h1 className='md:text-5xl text-lg font-extrabold text-slate-800 md:mb-7 mb-3'>Heritage Homes Furniture</h1>
                <p className='md:text-base text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum sapien a purus suscipit vehicula. Nullam malesuada neque id sapien elementum sagittis. Aliquam fermentum dolor sit amet quam consequat, eget porta lectus commodo. Sed in porta ante. Curabitur efficitur, dui et condimentum aliquet, augue libero efficitur eros, quis cursus eros.</p>
                <button className='bg-slate-800 p-2 md:w-28 w-16 md:text-base text-xs md:mt-6 mt-2 hover:bg-slate-950 duration-200 md:rounded-xl rounded-lg'>Browse</button>
            </div>
        </div>
    </main>
  )
}