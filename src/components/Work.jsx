import React from 'react'
import Workitem from './WorkItem'

const data = [
    {
        year: 2021,
        title: 'Pnx Studio',
        duration: 'July - Desember',
        details: 'I became a Videographer, My main task is to capture and produce high-quality video content. This involves planning shoots, operating cameras, setting up lighting and audio equipment, and editing footage to create a final product.'
    },
    {
        year: 2022,
        title: 'An-Namiroh',
        duration: 'November - Present',
        details: 'In this Company i became a Tour Leader. My job is responsible for communicating with all parties involved in the journey, such as travel agencies, airlines, hotels, and local organizers in Saudi Arabi and if any problems arise, such as delays, accommodation issues, or administrative errors, the tour leader is responsible for finding quick and effective solutions..'
    },
]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#011b5e] mb-4'>Experience</h1>
            {data.map((item, idx) => (
                <Workitem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details} />
            ))}

        </div>
    )
}

export default Work