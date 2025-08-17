import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">EventVista</span>
          <span className="logo-dot">.</span>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#events" className="nav-link">Events</a>
          
          <div className="nav-dropdown">
            <button 
              className="nav-dropdown-btn"
              onClick={toggleDropdown}
            >
              More <span className="dropdown-arrow">▼</span>
            </button>
            <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
            </div>
          </div>
          
          <a href="#login" className="nav-link">Login</a>
          <button className="nav-cta">Get Started</button>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
