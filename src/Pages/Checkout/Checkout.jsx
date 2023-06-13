import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb'
import CheckoutForm from './CheckoutForm'

const Checkout = () => {
    const [service, setService] = useState({})
    const { serviceId } = useParams()

    useEffect(() => {
        fetch(`https://genius-car-server-nu-ten.vercel.app/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceId])

    return (
        <div className='px-[15px] lg:px-0'>
            <Breadcrumb title='Checkout Page' />
            <CheckoutForm service={service} />
        </div>
    )
}

export default Checkout