import React, { useState } from 'react'
// import { MenuIcon, XIcon } from '@heroicons/react/outline';


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)
    const handleClose =()=> setNav(!nav)

    return (
        <div className='bg-zinc-200 h-[80px] w-screen drop-shadow-lg fiexd'>
            <div className="flex justify-between px-2 items-center w-full h-full">

                <div className='flex items-center'>
                    <h1>BRAND.</h1>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='hidden md:flex pr-4'>
                    <button className='border-none bg-transparent text-black mr-4'>SIGN IN</button>
                    <button className='px-8 py-3'>SIGN UP</button>
                </div>
                <div className='md:hidden'>
                    {
                        !nav ? <>
                         <svg onClick={handleNav} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                        </>   : <svg onClick={handleClose}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                      
                    }
                   
                </div>
            </div>
            <ul className={!nav ? "hidden": 'bg-zinc-200 px-8'}>
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
               
        <div className='flex flex-col my-4'>
            <button className='bg-transparent border text-indigo-600  px-8 py-3 mb-4'>Sign In</button>
            <button className='px-8 py-3 text-white'>Sign Up</button>
        </div>
            </ul>
        </div>


    )
}

export default Navbar