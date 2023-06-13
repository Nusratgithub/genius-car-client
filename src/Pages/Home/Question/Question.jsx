import React from 'react'
import time from '../../../assets/images/question/time.svg'
import phone from '../../../assets/images/question/phone.svg'
import location from '../../../assets/images/question/location.svg'

const Question = () => {
    return (
        <section className='container my-20 mx-auto bg-black text-white py-24 px-[72px] mb-b-70 lg:mb-b-130 rounded-rounded-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-0'>
                <div className='flex gap-5 items-center'>
                    <img src={ time } alt="Time Icon" />
                    <div>
                        <p className='text-base leading-5 font-medium mb-[10px]'>We are open monday-friday</p>
                        <h3 className='font-bold text-text-25 leading-leading-30'>7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={ phone } alt="Phone Icon" />
                    <div>
                        <p className='text-base leading-5 font-medium mb-[10px]'>Have a question?</p>
                        <h3 className='font-bold text-text-25 leading-leading-30'>+2546 251 2658</h3>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <img src={ location } alt="Location Icon" />
                    <div>
                        <p className='text-base leading-5 font-medium mb-[10px]'>Need a repair? our address</p>
                        <h3 className='font-bold text-text-25 leading-leading-30'>Liza Street, New York</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Question