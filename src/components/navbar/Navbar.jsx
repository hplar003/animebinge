import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h3>AnimeBinge</h3>
        <div className='menu-item'>
          <Link to='/'><p>Home</p></Link>
          <Link to='/discover'><p>Discover</p></Link>
          <Link to='/about'><p>About Us</p></Link>
          <div className='buttons' >
            <Link to='/signup'><button className='signup'>Sign Up</button></Link>
            <Link to='/discover'><button className='signin'>Sign In</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar