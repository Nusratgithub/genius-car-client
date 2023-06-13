import React from 'react'
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb'
import Service from '../Home/Services/Service'

const Services = () => {
    return (
        <div className='px-[15px] lg:px-0'>
            <Breadcrumb title='Services Page' />
            <Service />
        </div>
    )
}

export default Services