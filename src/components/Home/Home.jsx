import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero/Hero'
import Network from '../Network/Network'
import Providers from './Providers/Providers'

const Home = () => {
  return (
    <div className="home_container">
        <div className="home_wrapper">
            <Navbar/>
            <Hero/>
            <Network/>
            <Providers/>
        </div>
    </div>
  )
}

export default Home
