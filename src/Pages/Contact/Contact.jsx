import React from 'react'
import Breadcrumb from '../Shared/Breadcrumb/Breadcrumb'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <div className='px-[15px] lg:px-0'>
            <Breadcrumb title='Contact Page' />
            <ContactForm />
        </div>
    )
}

export default Contact