import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  }

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }
  return (
    <header>
      <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
          <NavLink to='/' className='logo'>
          <img src="/images/logo.png" alt="mia-lamerton-design-logo" />
          </NavLink>
            {/* Hamburger icon below: */}
            <div className='menu-icon' onClick={toggleMenu}>
                <div className={`bar bar1 ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`bar bar2 ${isOpen ? 'toggle' : ''}`}></div>
                <div className={`bar bar3 ${isOpen ? 'toggle' : ''}`}></div>
            </div>
            {/* Navlinks */}
            <ul className={`nav-pages ${isOpen ? 'active' : ''}`}>
                {/* Must have li and everything inside for each link */}
              <li>
                <NavLink 
                to='/'
                onClick={closeMenu}
                className={({isActive}) => (isActive ? 'active-link' : '')}
                >Home
                </NavLink>
              </li>

      
              <li>
                <NavLink 
                to='/contact'
                onClick={closeMenu}
                className={({isActive}) => (isActive ? 'active-link' : '')}
                >Contact
                </NavLink>
              </li>
        </ul>

      </nav>
      {isOpen && <div className='overlay' onClick={closeMenu}></div>} 
    </header>
  )
}

export default Navbar
