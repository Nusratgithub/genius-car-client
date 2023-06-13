import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const MoreService = () => {
    return (
        <div className='bg-[#F3F3F3] p-10 rounded mt-20'>
            <h3 className='font-bold text-2xl leading-leading-30 mb-5'>Services</h3>
            <div className='flex justify-between items-center bg-red-500 p-5 rounded text-white mb-5'>
                <h3 className='font-semibold text-base leading-5'>Full Car Repair</h3>
                <HiArrowNarrowRight className='text-xl' />
            </div>
            <div className='flex justify-between items-center bg-white p-5 rounded hover:bg-red-500 transition-colors duration-200 text-theme-dark hover:text-white mb-5'>
                <h3 className='font-semibold text-base leading-5'>Engine Repair</h3>
                <HiArrowNarrowRight className='text-xl' />
            </div>
            <div className='flex justify-between items-center bg-white p-5 rounded hover:bg-red-500 transition-colors duration-200 text-theme-dark hover:text-white mb-5'>
                <h3 className='font-semibold text-base leading-5'>Automatic Services</h3>
                <HiArrowNarrowRight className='text-xl' />
            </div>
            <div className='flex justify-between items-center bg-white p-5 rounded hover:bg-red-500 transition-colors duration-200 text-theme-dark hover:text-white mb-5'>
                <h3 className='font-semibold text-base leading-5'>Engine Oil Change</h3>
                <HiArrowNarrowRight className='text-xl' />
            </div>
            <div className='flex justify-between items-center bg-white p-5 rounded hover:bg-red-500 transition-colors duration-200 text-theme-dark hover:text-white mb-5'>
                <h3 className='font-semibold text-base leading-5'>Battery Charge</h3>
                <HiArrowNarrowRight className='text-xl' />
            </div>
        </div>
    )
}

export default MoreService