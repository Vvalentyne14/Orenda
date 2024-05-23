import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className="nav-container">
        <div className="nav-wrapper">
            <img src={logo} alt="" />

            <ul className="nav-list">
                <li>Home</li>
                <li>Our Team</li>
                <li>Insurance</li>
                <li>About</li>
                <li>Blog</li>
                <li>Privacy policy</li>
                <li>Contact Us</li>
            </ul>

            <div className="contact">
                <button>Book Now</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
