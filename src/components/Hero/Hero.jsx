import React, { useEffect } from 'react'
import "./Hero.css";
import {BsChevronCompactDown } from "react-icons/bs";
import MediaIcons from '../Social-media/MediaIcons'
import { motion } from "framer-motion";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
   <>
   <div className="intro"  id="home">

        <div className="i-left">
          <motion.div  initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 3,
              stiffness: 50,
              restDelta: 0.001
            }
          }} 
   viewport={{ once:false,amount:1 }}

         className="i-name">
            <span>Hello, I am</span>
            <span>Vaibhav Gupta</span>
            <span>
              A Fullstack developer with  good knowledge in web designing
              and <br/>development,producing the quality work.
            </span>
          </motion.div>
          <a href ="#contact" data-aos="flip-up" data-aos-duration="1000"><button  className="button ">Hire Me</button></a>
          
         <MediaIcons/>
          <a href='#about'><BsChevronCompactDown className='down-arrow' /></a>
          
        </div>
       
      </div>
   
   </>
  )
}

export default Hero;
