import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'
import Question from '../Question/Question'
import Service from '../Services/Service'
import Teams from '../Teams/Teams'
import Testimonials from '../Testimonial/Testimonials'
import WhyChoose from '../WhyChoose/WhyChoose'

const Home = () => {
    return (
        <div className='px-[15px] lg:px-0'>
            <Banner />
            <AboutMe />
            <Service />
            <Question />
            <Products />
            <Teams />
            <WhyChoose />
            <Testimonials />
        </div>
    )
}

export default Home