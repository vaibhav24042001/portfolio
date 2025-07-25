import React from 'react'
import "./MediaIcons.css"
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";


const MediaIcons = () => {
  return (
    <>
    <div className="i-icons">
    <a href="https://www.linkedin.com/in/vaibhav-gupta-743b00201/">
      <BsLinkedin
        className="react-icon"
        
      />
    </a>
    <a href="https://www.instagram.com/vaibhavgupta2404/">
      <BsInstagram
        className="react-icon"
        
      />
    </a>
    <a href="https://github.com/vaibhav24042001">
      <BsGithub className="react-icon"  />
    </a>
  </div>
    
    </>
  )
}

export default MediaIcons
