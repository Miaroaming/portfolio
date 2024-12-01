import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to='/'>
        <img src="/images/logo.png" alt="mia-lamerton-design-logo" />
        </Link>

        <div className='nav-pages'>
        <Link to='/'>Home</Link>

        {/* <Link to='/about'>About</Link> */}

        {/* <Link to='/work'>My Work</Link> */}

        <Link to='/contact'>Contact</Link>
        </div>

        
    </nav>
  )
}

export default Navbar
