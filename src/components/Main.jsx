import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover' src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="/" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Dendy Prasongko</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Frontend Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'User Interface Designer',
                                2000,
                                'Video Editor',
                                2000,

                            ]}
                            wrapper="div"
                            cursor={true}
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[150px] w-full'>
                        <a href="https://twitter.com/Servererror___" target="_blank">
                            <FaTwitter className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.facebook.com/dendy.prasongko.58/" target="_blank">
                            <FaFacebookF className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.instagram.com/dendyprsngko_/" target="_blank">
                            <FaInstagram className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmad-dendy-prasongko-putra/" target="_blank">
                            <FaLinkedin className='cursor-pointer' size={20} />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main