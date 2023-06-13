import React from 'react'
import TestimonialHeading from './TestimonialHeading'
import review1 from '../../../assets/images/testimonial/review1.png'
import review2 from '../../../assets/images/testimonial/review2.png'
import quote from '../../../assets/images/testimonial/quote.png'
import TestimonialItem from './TestimonialItem'

const testimonials = [
    {
        id: 1,
        name: 'Awlad Hossain',
        title: 'Businessman',
        img: review1,
        icon: quote,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
    {
        id: 2,
        name: 'Awlad Hossain',
        title: 'Businessman',
        img: review2,
        icon: quote,
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
]

const Testimonials = () => {
    return (
        <section className='container mx-auto mb-b-70 lg:mb-b-130'>
            <TestimonialHeading />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-b-50'>
            {
                    testimonials.map(testimonial => (
                        <TestimonialItem key={ testimonial.id } testimonial={ testimonial } />
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials