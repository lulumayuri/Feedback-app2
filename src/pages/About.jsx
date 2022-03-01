import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/shared/Card'
function About() {
  return (
    <Card>
        <h1>About Page</h1>
        <p>
          this  s a project
          
        </p>
        <p>  version 1.0.0</p>
        <Link to="/">Back to home</Link>
    </Card>
  )
}

export default About