import React ,{ useEffect }from 'react'
import "./Parallax.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

const Parallax = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
   <>
 <div className="parallax">
 <div className="overlay"></div>
 <div  className="container-box">
 <h1 data-aos="zoom-in" data-aos-duration="500">Have Any Questions ?</h1>
 <a href="#contact"> <button style={{margin:"3rem"}}className=" button about-button">Contact Me</button></a>

 </div>
 
 </div>
   </>
  )
}

export default Parallax
