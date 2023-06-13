import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ServiceHeading from './ServiceHeading'
import ServiceItem from './ServiceItem'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://genius-car-server-nu-ten.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className='container mx-auto'>
            <ServiceHeading />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => (
                        <ServiceItem key={service?._id} service={service} />
                    ))
                }
            </div>
            <div className='text-center mt-14'>
                <Link
                    to="/services"
                    className="font-semibold transition-colors duration-200 text-red-500 text-lg leading-21 border border-red-500 px-[22px] py-[17px] rounded-md hover:bg-red-500 hover:text-white"
                    aria-label="More Services"
                    title="More Services"
                >
                    More Services
                </Link>
            </div>
        </section>
    )
}

export default Services