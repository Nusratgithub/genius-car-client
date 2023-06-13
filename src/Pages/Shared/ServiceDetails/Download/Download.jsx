import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { FaRegFile } from 'react-icons/fa'

const Download = () => {
    return (
        <div className='p-10 my-10 rounded-rounded-10 mb-b-30 bg-black'>
            <h3 className='font-bold text-2xl leading-leading-30 mb-5 text-white'>Download</h3>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegFile className='text-white text-2xl' />
                    <div>
                        <h3 className='text-white font-semibold text-lg leading-leading-21 mb-1'>Our Brochure</h3>
                        <p className='text-[#A2A2A2] font-normal text-base leading-5'>Download</p>
                    </div>
                </div>
                <HiArrowNarrowRight className='text-xl bg-red-500 w-14 h-14 rounded p-4 text-white ' />
            </div>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-[10px]'>
                    <FaRegFile className='text-white text-2xl' />
                    <div>
                        <h3 className='text-white font-semibold text-lg leading-leading-21 mb-1'>Company Details</h3>
                        <p className='text-[#A2A2A2] font-normal text-base leading-5'>Download</p>
                    </div>
                </div>
                <HiArrowNarrowRight className='text-xl bg-red-500 w-14 h-14 rounded p-4 text-white ' />
            </div>
        </div>
    )
}

export default Download;