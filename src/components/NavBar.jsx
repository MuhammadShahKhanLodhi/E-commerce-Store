import React, { useEffect, useState } from 'react'
import Logo from '../assets/Images/Logo.png'
import CategoryDropdown from './CategoryDropdown'
import BlogDropdown from './BlogDropdown'
import { FaSearch } from 'react-icons/fa'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { IoMenu } from 'react-icons/io5'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {

    const [isCategoryVisible, setIsCategoryVisible] = useState(false)
    const [isBlogVisible, setIsBlogVisible] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize(){
            setScreenWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    }, [])


  return (
    <nav className='w-screen md:h-[130px] h-[85px] bg-primary p-3 fixed'>
        {
            screenWidth > '740' ? 
            <div className="lg:container p-0 flex items-center justify-between">
            <div className='flex md:gap-7 gap-4 md:h-[100px] h-[60px]'>
                <img src={Logo} className='md:h-[100px] h-[60px]' alt='Logo' />
                <ul className='flex items-center gap-4 text-neutral-800 md:text-base text-sm font-semibold'>
                    <li className='hover:text-secondary duration-200 cursor-pointer'>Home</li>
                    <li className='hover:text-secondary duration-200 cursor-pointer'>About</li>
                    <div className='flex flex-col justify-center items-center h-[50px] w-[70px] gap-2' onMouseOver={() => setIsCategoryVisible(true)} onMouseOut={() => setIsCategoryVisible(false)}>
                        <li className='hover:text-secondary duration-200 cursor-pointer fixed'>Category</li>
                        {
                            isCategoryVisible && <CategoryDropdown />
                        }
                    </div>
                    <div className='flex flex-col justify-center items-center h-[50px] w-[35px] gap-2' onMouseOver={() => setIsBlogVisible(true)} onMouseOut={() => setIsBlogVisible(false)}>
                        <li className='hover:text-secondary duration-200 cursor-pointer fixed'>Blog</li>
                        {
                            isBlogVisible && <BlogDropdown />
                        }
                    </div>
                    <li className='hover:text-secondary duration-200 cursor-pointer'>Contact Us</li>
                </ul>
            </div>
            <div className='flex justify-center items-center'>
                <button type='submit' className='mr-4 md:scale-125'><FaSearch /></button>
                <input type='text' className='lg:w-56 w-36 md:h-10 h-7 p-4 bg-white/40 rounded-xl' placeholder='Search Products' />
                <p className='md:mx-8 mx-4 hover:text-secondary duration-200'><a href='myaccount'>My Account</a></p>
                <a href='shoppingcart'><AiOutlineShoppingCart className='md:scale-150 scale-110 hover:text-secondary duration-200' /></a>
            </div>
        </div>
        :
        <div className='lg:container p-0 flex items-center justify-between'>
            <div>
                <img src={Logo} className='h-[60px]' alt='Logo' />
            </div>
            <div className='flex justify-center items-center'>
                <button type='submit' className='mr-4'><FaSearch /></button>
                <input type='text' className='xs:w-60 w-28 h-7 xs:p-4 p-2 bg-white/40 rounded-xl' placeholder='Search Products' />
            </div>
            <div>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary px-3 py-2 hover:bg-secondary/20">
                        <IoMenu className='scale-150'/>
                        </MenuButton>
                    </div>

                    <Transition
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="myaccount"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-white',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Home
                                </a>
                            )}
                            </MenuItem>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="shoppingcart"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-white',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                About
                                </a>
                            )}
                            </MenuItem>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="shoppingcart"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-white',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Category
                                </a>
                            )}
                            </MenuItem>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="shoppingcart"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-white',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Blog
                                </a>
                            )}
                            </MenuItem>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="shoppingcart"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-white',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Contact Us
                                </a>
                            )}
                            </MenuItem>
                        </div>
                        <div className="py-1">
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="myaccount"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-white',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                My Account
                                </a>
                            )}
                            </MenuItem>
                            <MenuItem>
                            {({ focus }) => (
                                <a
                                href="shoppingcart"
                                className={classNames(
                                    focus ? 'bg-gray-100 text-gray-900' : 'text-white',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Shopping Cart
                                </a>
                            )}
                            </MenuItem>
                        </div>
                        </MenuItems>
                    </Transition>
                </Menu>
            </div>
        </div>

        }
    </nav>
  )
}
