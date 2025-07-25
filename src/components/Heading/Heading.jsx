import React from 'react'
import "./Heading.css"



const Heading = (props) => {

  return (
   <>
   <div  className="heading">
   <h1>{props.heading}</h1>
 
   </div>
   </>
  )
}

export default Heading

// initial={{ opacity: 0 }}
// transition={{ duration: 1,  delay: 0.2}}
// whileInView={{ opacity: 1 }}
// viewport={{ once:false,amount:0.5 }}