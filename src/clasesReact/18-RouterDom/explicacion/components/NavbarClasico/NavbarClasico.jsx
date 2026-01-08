import React from 'react'
import './navbarClass.css'
import { Link, NavLink } from 'react-router'

export const NavbarClasico = () => {

  return (
    <nav className='nav-ppal'>
        <Link className='sinSub' to='/'><span className='logo'>Logo</span></Link>
        <NavLink className={({isActive})=> isActive ? 'active sinSub':'sinSub'} to='/'>Home</NavLink>
        <NavLink className="sinSub" to='/about'>About</NavLink>
        <NavLink className="sinSub" to='/productos'>Productos</NavLink>
    </nav>
  )
}