import React from 'react'
import logo from '../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import { HiOutlineX } from "react-icons/hi"
import { useRef, useState } from 'react'
const Navbar = () => {
   const [toShowHam, setToShowHam] = useState(true)
   const active = useRef()
   const responsive = () => {
      active.current.closest('nav').classList.toggle('active')
      setTimeout(() => active.current.closest('nav').classList.contains('active') && active.current.closest('nav').classList.add('visible'), 500)
      setToShowHam((initStatus) => !initStatus)
      if (!active.current.closest('nav').classList.contains('active')) {
         active.current.closest('nav').classList.remove('visible')
      }
   }
   return (
      <nav className='navbar'>
         <div className='home--logo'>
            <img src={logo} alt="llogo" />
         </div>
         <div className='nav__list'>
            <ul className='nav__links'>
               <li>Products</li>
               <li>Features</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
            <div className='nav__account'>
               <button type="button" className='btn--login'>Login</button>
               <button type="button" className='btn btn--register'>Register</button>
            </div>
         </div>
         <div className='hamburger' ref={active} onClick={responsive}>
            {toShowHam ? <FaBars /> : <HiOutlineX />}
         </div>
      </nav>
   )
}

export default Navbar