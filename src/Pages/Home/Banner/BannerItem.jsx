import React from 'react'
import './BannerItem.css'
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi"
import { Link } from 'react-router-dom'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full mt-4 mb-8">
            <div className='carousel-img h-[600px] w-full'>
                <img src={image} alt="" className="w-full h-[100%] rounded-xl object-cover" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-10 md:left-24 top-1/4">
                <h1 className='text-4xl md:text-6xl leading-75 font-bold text-white'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 md:w-2/4 left-10 md:left-24 top-1/2">
                <p className='text-lg text-white font-normal leading-30'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex flex-col md:flex-row gap-5 justify-start transform -translate-y-1/2 w-2/3 left-10 md:left-24 top-3/4">
                <Link
                    to="/"
                    className="font-semibold transition-colors duration-200 text-white text-lg leading-21 border border-red-500 bg-red-500 px-7 pt-[15px] pb-[19px] rounded-md hover:bg-transparent hover:border-white"
                    aria-label="Discover More"
                    title="Discover More"
                >
                    Discover More
                </Link>
                <Link
                    to="/"
                    className="font-semibold transition-colors duration-200 text-white text-lg leading-21 border border-white px-7 pt-[15px] pb-[19px] hover:border-red-500 rounded-md hover:bg-red-500"
                    aria-label="Latest Project"
                    title="Latest Project"
                >
                    Latest Project
                </Link>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5 bg-white/40 hover:bg-red-500 border border-white/40 hover:border-red-500">
                    <HiArrowNarrowLeft />
                </a>
                <a href={`#slide${next}`} className="btn btn-circle bg-white/40 hover:bg-red-500 border border-white/40 hover:border-red-500">
                    <HiArrowNarrowRight />
                </a>
            </div>
        </div>
    )
}

export default BannerItem