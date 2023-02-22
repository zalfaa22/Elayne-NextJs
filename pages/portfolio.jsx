import React from 'react'
import Hero from '../components/Hero'
import Project from '../components/Project'

const portfolio = () => {
  return (
    <div>
        <Hero heading='My portfolio' message='This is some of my project' />
        <Project />
    </div>
  )
}

export default portfolio