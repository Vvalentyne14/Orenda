import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="nav-wrapper">
            <img src={logo} alt="" />

            <ul className="nav-list">
                <NavLink to={'/'}><li>Home</li></NavLink>
                <NavLink><li>Our Team</li></NavLink>
                <NavLink><li>Insurance</li></NavLink>
                <NavLink><li>About</li></NavLink>
                <NavLink to={'/blogs'}><li>Blog</li></NavLink>
                <NavLink to={'/privacy policy'}><li>Privacy policy</li></NavLink>
                <NavLink><li>Contact Us</li></NavLink>
            </ul>

            <div className="contact">
                <button>Book Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
