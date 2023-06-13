import React from 'react'
import AboutMe from '../Home/AboutMe/AboutMe'
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb'

const About = () => {
    return (
        <div className='px-[15px] lg:px-0'>
            <Breadcrumb title='About Page' />
            <AboutMe />
        </div>
    )
}

export default About