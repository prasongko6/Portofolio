import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BsPerson } from 'react-icons/bs'

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer' />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-white/950 flex flex-col justify-center items-center z-20'>
                        <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                            <AiOutlineHome size={20} />
                            <span className='pl-4'>Home</span>
                        </a>
                        <a href="#work" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                            <GrProjects size={20} />
                            <span className='pl-4'>Work</span>
                        </a>
                        <a href="#projects" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-3 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                            <AiOutlineProject size={20} />
                            <span className='pl-4'>Projects</span>
                        </a>
                        {/* <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                            <BsPerson size={20} />
                            <span className='pl-4'>Resume</span>
                        </a> */}
                        {/* <a href="#contact" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                            <AiOutlineMail size={20} />
                            <span className='pl-4'>Contacts</span>
                        </a> */}
                    </div>
                )
                    : (
                        ''
                    )
            }
            <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-transparent m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                        <AiOutlineHome size={20} />

                    </a>
                    <a href="#work" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-transparent m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                        <GrProjects size={20} />
                    </a>
                    <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-transparent m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                        <AiOutlineProject size={20} />
                    </a>
                    {/* <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-transparent m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                        <BsPerson size={20} />
                    </a> */}
                    {/* <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 hover:bg-transparent m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 font-semibold'>
                        <AiOutlineMail size={20} />
                    </a> */}

                </div>
            </div>
        </div>
    )
}

export default Sidenav