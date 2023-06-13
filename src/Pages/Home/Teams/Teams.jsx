import React from 'react'
import TeamHeading from './TeamHeading'
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import Team from './Team'

const teams = [
    {
        id: 1,
        name: 'Car Engine Plug',
        title: 'Engine Expert',
        img: team1
    },
    {
        id: 2,
        name: 'Car Engine Plug',
        title: 'Engine Expert',
        img: team2
    },
    {
        id: 3,
        name: 'Car Engine Plug',
        title: 'Engine Expert',
        img: team3
    }
]

const Teams = () => {
    return (
        <section className='container mx-auto mb-b-70 lg:mb-b-130'>
            <TeamHeading />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-b-50'>
                {
                    teams.map(team => (
                        <Team key={ team.id } team={ team } />
                    ))
                }
            </div>
        </section>
    )
}

export default Teams