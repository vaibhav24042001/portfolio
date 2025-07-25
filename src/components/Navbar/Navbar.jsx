import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
   <>
   <div className="n-wrapper">
   <div className="n-left">
<div className="n-name">PortFolio</div>
   </div>
   <div className="n-right  ">
<div className="n-list">
   <ul className='flexCenter'>
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#skills">Skills</a></li>
       <li><a href="#projects">Projects</a></li>
       <li><a href="#contact">Contact</a></li>
       </ul>
</div>

   </div>
</div>
   </>
  )
}

export default Navbar
