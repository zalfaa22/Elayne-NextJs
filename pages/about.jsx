import React from 'react'
import Hero from '../components/Hero'
import Aboutme from '../components/Aboutme'

const About = () => {
  return (
    <div>
        <Hero heading='My biodata 📝' message='This is some information about me' />
        <Aboutme />
    </div>
  )
}

export default About