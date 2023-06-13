import React from 'react'
import WhyChooseHeading from './WhyChooseHeading'
import team from '../../../assets/icons/team.svg'
import time from '../../../assets/icons/time.svg'
import support from '../../../assets/icons/support.svg'
import equipment from '../../../assets/icons/equipment.svg'
import guaranty from '../../../assets/icons/guaranty.svg'
import delivery from '../../../assets/icons/delivery.svg'
import Choose from './Choose'

const whyChoose = [
    {
        id: 1,
        name: 'Expert Team',
        img: team
    },
    {
        id: 2,
        name: 'Timely Delivery',
        img: time
    },
    {
        id: 3,
        name: '24/7 Support',
        img: support
    },
    {
        id: 4,
        name: 'Best Equipment',
        img: equipment
    },
    {
        id: 5,
        name: '100% Guaranty',
        img: guaranty
    },
    {
        id: 6,
        name: 'Timely Delivery',
        img: delivery
    }
]

const WhyChoose = () => {
    return (
        <section className='container mx-auto mb-b-70 lg:mb-b-130'>
            <WhyChooseHeading />
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-b-50'>
                {
                    whyChoose.map(choose => (
                        <Choose key={ choose.id } choose={ choose } />
                    ))
                }
            </div>
        </section>
    )
}

export default WhyChoose