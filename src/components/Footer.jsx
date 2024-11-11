import React from 'react'
import { NavLink } from 'react-router-dom'
import Feedback from './Feedback'

function Footer() {
  return (
    <nav className='md:grid grid-cols-4 justify-between px-3 py-10 shadow-lg border border-red-500 bg-black text-white'>
        <div>
          <h3 className='font-bold text-lg'> FEEDBACKS</h3>
           
        </div>
        <div>
          <h3 className='font-bold text-lg'>SOCIALS</h3>
          <div className='flex flex-col text-sm gap-3'>
          <NavLink to={"facebook.com"} target='_blank'>Facebook</NavLink>
          <NavLink to={"https://www.instagram.com"} target='_blank'>Instagram</NavLink>
          <NavLink to={"https://x.com"} target='_blank'>Twitter</NavLink>
          <NavLink to={"https://www.linkedin.com/login"} target='_blank'>LinkedIn</NavLink>
          </div>
            
        </div>

        <div>
          <h3 className='text-lg font-bold'>NAVIGATION</h3>
            <div className='flex flex-col gap-3 justify-center text-sm'><NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/about"}>About Us</NavLink>
            <NavLink to={"/contact"}>Contact Us</NavLink>
            </div>
        </div>
        <div className=''>
          <h3 className='font-bold text-lg'>WEBLINKS</h3>
          <div className='flex flex-col gap-3 text-sm'>
            <a href="#">Lyca</a>
            <a href="#">Three</a>
            <a href="#">O2</a>
            <a href="#">Lebara</a>
            <a href="#">Vmo</a>
          </div>
        </div>

    </nav>
  )
}

export default Footer