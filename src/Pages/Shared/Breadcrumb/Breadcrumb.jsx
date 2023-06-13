import React from 'react'
import breadcrumb from '../../../assets/images/breadcrumb.png'
import './Breadcrumb.css'

const Breadcrumb = ({ title }) => {
    return (
        <section className='container mx-auto mt-8 relative'>
            <div className='breadcrumb_img'>
                <img src={breadcrumb} alt="" className='w-full ' />
            </div>
            <div className='absolute text-white top-[50%] -translate-y-[50%] pl-[100px]'>
                <h1 className='text-4xl leading-10 md:text-text-45 md:leading-leading-54 font-bold'>{title}</h1>
            </div>
        </section>
    )
}

export default Breadcrumb