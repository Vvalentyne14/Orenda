import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero/Hero'

const Home = () => {
  return (
    <div className="home_container">
        <div className="home_wrapper">
            <Navbar/>
            <Hero/>
        </div>
    </div>
  )
}

export default Home
