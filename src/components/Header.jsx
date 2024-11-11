import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaAlignJustify } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

let Navlist = [{title: "Home", path: "/home"}, {title: "About", path: "/about"}, {title: "Contact", path: "/contact"}, {title: "Billings", path: "/billings"}, {title: "Payments", path: "/payments"}, {title: "Signup", path: "/signup"}, {title: "Login", path: "/login"}, {title: "Feedback", path: "/feedback"}
]

function Header() {
  const [navopen, setNavOpen] = useState(false)
  return (
    <nav className='flex flex-row justify-between px-3 py-10 shadow-lg relative'>
        <div className='font-bold text-2xl'>LOGO</div>
        <div className='hidden md:flex justify-around text-lg w-1/2'>
            {Navlist.map((link, index) => {
                return (<NavLink to={link.path} className={({isActive}) => isActive? "text-blue-800" : ""}>{link.title}</NavLink>)

            })}
        </div>
        {navopen? <div className='md:hidden flex flex-col absolute z-20 top-28 bg-white w-full left-0 right-0 pl-20'>{Navlist.map((data, index) => {
          return(<NavLink to={data.path}>{data.title}</NavLink>)
        }) }</div> : ""}
        {/* {<button onClick={() => setNavOpen(!navopen) } className='md:hidden mr-14'><FaAlignJustify /></button>}
        {<button onClick={() => setNavOpen(!navopen) } className='md:hidden mr-14'><IoCloseSharp /></button>} */}
        {navopen? <button onClick={() => setNavOpen(!navopen) } className='md:hidden mr-14'><IoCloseSharp /></button> : <button onClick={() => setNavOpen(!navopen) } className='md:hidden mr-14'><FaAlignJustify /></button> }
    </nav>
    
  )
  
}

export default Header