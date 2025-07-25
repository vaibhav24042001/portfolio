import React from 'react'
import "./Arrow.css"
import {FiArrowDown} from "react-icons/fi"

const Arrow = (props) => {
  return (
    <>
    <div className="arrow">
    <a href={props.goto}><FiArrowDown/></a>
  
      </div>
  
    
    </>
  )
}

export default Arrow
