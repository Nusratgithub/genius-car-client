import React from 'react'

const Choose = ({ choose }) => {
    const { name, img } = choose
    return (
        <div className='text-black border border-[#E8E8E8] px-3 py-7 cursor-pointer flex flex-col justify-center items-center rounded-rounded-10 hover:bg-red-500 hover:text-white transition-colors duration-200 hover:border-red-500'>
            <img className='w-[75px] h-[53px] mb-5' src={img} alt={name} />
            <h3 className='text-center text-lg font-bold leading-leading-21'>{name}</h3>
        </div>
    )
}

export default Choose