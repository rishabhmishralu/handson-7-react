import React from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css"

const Navbar = () => {
  return (
    <>
    <div className='nav-flex'>
      <div><NavLink className="navlink" to="/">Home</NavLink></div>
      <div><NavLink className="navlink" to="/about">About</NavLink></div>
      <div><NavLink className="navlink" to="/contact">Contact</NavLink></div>
    </div>
    </>
  )
}

export default Navbar