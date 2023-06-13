import React from 'react'
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
import { Link } from 'react-router-dom'

const AboutMe = () => {
    return (
        <section className='container mx-auto mt-10 lg:mb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='relative'>
                    <img className='w-4/5 h-[350px] rounded-lg shadow-xl' src={person } alt="" />
                    <img className='absolute w-3/5  border-8 border-white rounded-rounded-10 lg:right-8 right-0 top-52' src={ parts } alt="" />
                </div>
                <div className='my-auto mt-5'>
                    <h3 className='text-red-600 text-xl leading-6 font-bold mt-10 lg:mt-0'>About Us</h3>
                    <h2 className='font-bold text-theme-dark text-4xl leading-10 md:text-text-45 md:leading-leading-54 pb-5'>We are qualified &  <br/> of experience in this field</h2>
                    <p className='text-base font-normal text-theme-text mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className='text-base font-normal text-theme-text mb-b-30'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <Link
                        to="/"
                        className="my-6 inline-block font-semibold transition-colors duration-200 text-white text-lg leading-21 border border-theme-default bg-red-600 px-[26px] py-[17px] rounded-md hover:bg-transparent hover:border-red-600 hover:text-red-600"
                        aria-label="Get More Info"
                        title="Get More Info"
                        >
                            Get More Info
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default AboutMe