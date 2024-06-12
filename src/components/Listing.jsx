import React from 'react'

export default function Listing(props) {
  return (
    <div key={props.id} className='sm:w-fit w-full xs:h-64 h-52 flex flex-col xs:justify-between justify-around items-center text-slate-800 mb-2 sm:mx-auto'>
        <img src={props.img} alt="Product Image" className='xs:h-48 h-36' />
        <h3 className='hover:underline hover:text-black xs:text-base text-xs'><a href={props.href}>{props.title}</a></h3>
        <p className='xs:text-base text-xs'>{props.price}</p>
    </div>
  )
}
