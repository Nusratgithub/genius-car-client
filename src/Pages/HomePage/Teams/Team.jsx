import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Team = ({ team }) => {
    const { name, title, img } = team

    return (
        <div className='p-[25px] border border-[#E8E8E8] rounded-rounded-10 text-center'>
            <img className='rounded-rounded-10 mb-5' src={img} alt={name} />
            <h2 className='text-theme-body font-bold text-text-25 leading-leading-30 mb-[10px]'>{name}</h2>
            <h4 className='text-xl font-semibold text-theme-text leading-6 mb-[15px]'>{title}</h4>
            <div className='flex justify-center gap-2'>
                <FaFacebookF className='border border-red-500 text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-200' />
                <FaTwitter className='border border-red-500 text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-200' />
                <FaLinkedinIn className='border border-red-500 text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-200' />
                <FaInstagram className='border border-red-500 text-xl w-10 h-10 p-3 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-200' />
            </div>
        </div>
    )
}

export default Team