import React from 'react'

const ServiceContent = ({ service }) => {
    const { title, img, description, facility } = service
    return (
        <>
            <img className='rounded mb-6 mt-20 h-[460px] w-full' src={img} alt={title} />
            <h2 className='text-theme-dark font-bold text-[35px] leading-[42px] mb-3'>{title}</h2>
            <p className='capitalize font-normal text-base text-theme-text leading-leading-30 mb-7'>{description}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    facility?.map((faci, i) => (
                        <div key={i} className='p-10 bg-[#F3F3F3] rounded-xl border-t-2 border-t-red-500 mb-b-30'>
                            <h3 className='text-theme-body font-bold text-xl leading-6 mb-[10px]'>{faci?.name}</h3>
                            <p className='capitalize font-normal text-base text-theme-text leading-leading-30'>{faci?.details}</p>
                        </div>
                    ))
                }
            </div>
            <p className='capitalize font-normal text-base text-theme-text leading-leading-30 my-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <h2 className='text-theme-dark font-bold text-[35px] leading-[42px] mb-b-30'>3 Simple Steps to Process</h2>
            <p className='capitalize font-normal text-base text-theme-text leading-leading-30 my-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='flex flex-col items-center py-10 px-9 rounded border border-[#E8E8E8] mb-b-30 lg:mb-0'>
                    <div className='bg-red-500 w-20 h-20 flex justify-center items-center rounded-full text-white border-8 border-red-500/10 mb-5'>
                        <h3 className='font-bold text-xl leading-6'>01</h3>
                    </div>
                    <h3 className='uppercase font-bold text-xl leading-6 text-theme-dark mb-5'>Step One</h3>
                    <p className='text-center capitalize text-theme-text leading-6'>It uses a dictionary of over 200 .</p>
                </div>
                <div className='flex flex-col items-center py-10 px-9 rounded border border-[#E8E8E8] mb-b-30 lg:mb-0'>
                    <div className='bg-red-500 w-20 h-20 flex justify-center items-center rounded-full text-white border-8 border-red-500/10 mb-5'>
                        <h3 className='font-bold text-xl leading-6'>02</h3>
                    </div>
                    <h3 className='uppercase font-bold text-xl leading-6 text-theme-dark mb-5'>Step Two</h3>
                    <p className='text-center capitalize text-theme-text leading-6'>It uses a dictionary of over 200 .</p>
                </div>
                <div className='flex flex-col items-center py-10 px-9 rounded border border-[#E8E8E8] mb-b-30 lg:mb-0'>
                    <div className='bg-red-500 w-20 h-20 flex justify-center items-center rounded-full text-white border-8 border-red-500/10 mb-5'>
                        <h3 className='font-bold text-xl leading-6'>03</h3>
                    </div>
                    <h3 className='uppercase font-bold text-xl leading-6 text-theme-dark mb-5'>Step Three</h3>
                    <p className='text-center capitalize text-theme-text leading-6'>It uses a dictionary of over 200 .</p>
                </div>
            </div>
        </>
    )
}

export default ServiceContent