import React ,{ useEffect }from 'react'
import "./Skill.css"
import Heading from '../Heading/Heading'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Skill = () => {
    
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <>
    <div className="skills" id='skills'>
    <div className="top">
    <Heading heading=" My Skills "/>
    <h2 data-aos="zoom-in" data-aos-duration="500">These are the technologies I have been working with</h2>
    </div>

    <div className="bottom">
    <img data-aos="flip-left" data-aos-duration="800" src ="typescript.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src ="vue.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="redux.jpg" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="js.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="logo512.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="nodejs.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="mongodb.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="bootstrap.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="saas.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="postman.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="restapi.png" alt="" />
    <img data-aos="flip-left" data-aos-duration="800" src="npm.png" alt="" />   
     
    </div>  
    </div>
    
    </>
  )
}

export default Skill
// <Heading title={title}/>
