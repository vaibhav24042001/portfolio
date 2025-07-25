import React, { useEffect } from 'react'
import './About.css'
import Heading from '../Heading/Heading'
import VaibhavResume from "./Resume.pdf"

import MediaIcons from '../Social-media/MediaIcons'

import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
   return (
    <>
   <div className="about" id='about'>
  
  <div className="about-Header">
 <Heading  heading="Who i Am ?"/>
   
   
   </div>
   <div 
   data-aos="zoom-in-right"
    className="about-body">
   
   <div className="about-left">
   <h1>ABOUT ME</h1>
   <hr />
   <h1 data-aos="flip-up" data-aos-duration="800"  data-aos-delay="200">I'm <span>Vaibhav Gupta</span>, a Fullstack developer.</h1>
 <p>I am a passionate Full Stack Developer with over three years of professional experience in designing and developing robust web and mobile applications. My expertise spans both front-end and back-end technologies, including JavaScript, TypeScript, HTML, CSS, and modern frameworks like React, Next.js, Vue.js, Nuxt.js, and React Native. On the backend, I work confidently with Node.js, Express, PHP, and MySQL, crafting scalable and efficient APIs and server-side logic. I’m well-versed in state management libraries like Redux Toolkit and Zustand, and I focus on building clean, responsive, and user-centric interfaces that deliver seamless user experiences. I thrive in dynamic environments, enjoy solving complex problems, and continuously explore new tools and technologies to stay ahead of industry trends. With a strong commitment to code quality, performance, and scalability, I take pride in turning ideas into high-impact digital solutions that make a difference.</p>
 <a href="#contact"> <button style={{marginTop:"3rem"}}className="color-button about-button">Contact Me</button></a>
 
 <MediaIcons/>
   
   </div>

   <div  className="about-right">
   <h2 data-aos="fade-left" data-aos-duration="700"  data-aos-delay="200"><span>Name: </span>Vaibhav Gupta</h2>
   <hr />
   
   <h2 data-aos="fade-left" data-aos-duration="700"  data-aos-delay="300"><span>Address: </span> Raipur, Chhattisgarh</h2>
   <hr />

   <h2 data-aos="fade-left" data-aos-duration="700"  data-aos-delay="400"><span>Email: </span>guptavaibhav24042001@gmail.com</h2>
   <hr />
   <h2 data-aos="fade-left" data-aos-duration="700"  data-aos-delay="500"><span>Phone: </span>7898825317</h2>
   

   <a href={VaibhavResume} download> <button style={{margin:"3rem"}}className=" color-button about-button">Download CV</button></a>
   </div>
   
   </div>
   
   
 
   </div>
  
   
   </>
  )
}

export default About
