import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero/Hero'
import Network from '../Network/Network'
import Providers from './Providers/Providers'
import Meet from './Meet/Meet'
import Treat from './Treat/Treat'
import Available from './Available/Available'
import Handle from './Handle/Handle'
import Journey from './Journey/Journey'
// import Hear from './Hear/Hear'
import Location from './Location/Location'
import FAQ from './FAQ/FAQ'

const Home = () => {
  return (
    <div className="home_container">
        <div className="home_wrapper">
            <Navbar/>
            <Hero/>
            <Network/>
            <Providers/>
            <Meet/>
            <Treat/>
            <Handle/>
            <Available/>
            {/* <Hear/> */}
            <Journey/>
            <Location/>
            <FAQ/>
        </div>
    </div>
  )
}

export default Home
