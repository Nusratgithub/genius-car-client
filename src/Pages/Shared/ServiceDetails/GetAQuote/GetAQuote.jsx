import React from 'react'
import { Link } from 'react-router-dom'
import logoWhite from '../../../../assets/logoWhite.svg'

const GetAQuote = () => {
    return (
        <div className='flex flex-col items-center justify-center p-10 rounded-rounded-10 mb-b-30 bg-black'>
            <div className='flex flex-col items-center justify-center mb-b-30'>
                <img src={logoWhite} alt="" className='mb-5 w-36' />
                <h3 className='font-bold text-xl text-center text-white leading-9 mb-5'>Need Help? We Are Here To Help You</h3>
            </div>
            <div className='bg-white w-full text-center pt-5 px-10 pb-10 rounded-rounded-10'>
                <h3 className='text-xl font-bold leading-9'><span className='text-red-500'>Car Doctor</span> Special</h3>
                <h3 className='text-base leading-9 font-bold text-theme-text'>Save up to <span className='text-red-500'>60% off</span></h3>
            </div>
            <div className='-mt-3 mb-b-30'>
                <Link
                    to="/get-a-quote"
                    className="font-semibold transition-colors duration-200 text-lg leading-21 border border-red-500 px-[22px] py-[17px] rounded-md bg-red-500 text-white"
                    aria-label="Get A Quote"
                    title="Get A Quote"
                >
                    Get A Quote
                </Link>
            </div>
        </div>
    )
}

export default GetAQuote