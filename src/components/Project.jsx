import React from 'react'
import ProjectItem from './ProjectItem'
import foodImg from '../assets/food.png'
import teslaImg from '../assets/tesla.png'
import netflixImg from '../assets/netflix-clone.png'
import metaverse from '../assets/metaverse.png'
import Pi from './Pi'

const Project = () => {
    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Projects</h1>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={netflixImg} title="Netflix CLone"/>
                <Pi img={teslaImg} title="Tesla Clone" />
                <ProjectItem img={foodImg} title="StreetFood Web" />
                <ProjectItem img={metaverse} title="Metaverse Page" />
            </div>  
        </div>

    )
}

export default Project