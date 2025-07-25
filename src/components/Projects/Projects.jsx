import React ,{ useEffect }from 'react'
import "./Projects.css"
import Heading from '../Heading/Heading'
import {BiLinkExternal} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"


import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  
  return (

    
    <>
    <section  >
    <div className="projects-container" id='projects'>
    
    <div className="title" >
    <Heading heading="My works" />
    </div>

    <div  className="project-list">
    
<div className="projects">

<div  data-aos="fade-down-right" data-aos-delay="200" className="left">
<h1>IMDB Movies App</h1>
<img src="imdb.jpg" alt="imdb" />
</div>

<div  className="right">
<p>This is a React project that provides us the details of the
upcoming, popular & top rated movies .<br/> 
On clicking any movie it will show the detail page of the
movie. </p>
<div className="links">
<a href="https://github.com/Hitesh-Singh09"><BsGithub className='link'/></a>
<a href="https://imdb-moviesapp.netlify.app"><BiLinkExternal className='link'/></a>
</div>
</div>

</div>
<div className="projects">



<div  className="right">
<p>It is a Login and register form where user can create
account and login to there profile.<br/>
It is built using MERN Stack.
.</p>
<div className="links">
<a href="https://github.com/Hitesh-Singh09"><BsGithub className='link'/></a>
<a href=""><BiLinkExternal className='link'/></a>
</div>
</div>

<div data-aos="fade-down-left" data-aos-delay="200" className="left">
<h1 style={{textAlign:"right"}}>Login Register Form</h1>
<img src="login.jpg" alt="imdb" />
</div>

</div>
<div className="projects">

<div  data-aos="fade-down-right" data-aos-delay="200" className="left">
<h1>Weather App </h1>
<img src="weather.jpg" alt="imdb" />
</div>

<div  className="right">
<p >User can view the weather in his/her current city location.<br/> The weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, wind speed,sunrise and sunset , max-min temp.</p>

<div className="links">
<a href="https://github.com/Hitesh-Singh09"><BsGithub className='link'/></a>
<a href="https://instant-weather-report.netlify.app"><BiLinkExternal className='link'/></a>
</div>
</div>

</div>
<div className="projects">



<div  className="right">
<p >This is a responsive restaurant website built using React</p>

<div className="links">
<a href="https://github.com/Hitesh-Singh09"><BsGithub className='link'/></a>
<a href="https://fine-dine-restaurant.netlify.app"><BiLinkExternal className='link'/></a>
</div>
</div>

<div data-aos="fade-down-left" data-aos-delay="200"  className="left">
<h1 style={{textAlign:"right"}}>Restaurant Website</h1>
<img src="Project2.png" alt="resaturant" />
</div>

</div>

      
    </div> 



    <div  className="mobile-project-list">
    
<div className="projects">

<div   className="left">
<h1>IMDB Movies App</h1>
<img src="imdb.jpg" alt="imdb" />
</div>

<div  className="right">
<p>This is a React project that provides us the details of the
upcoming, popular & top rated movies .<br/> 
On clicking any movie it will show the detail page of the
movie. </p>
<div className="links">
<a href="https://github.com/Hitesh-Singh09"><BsGithub className='link'/></a>
<a href="https://imdb-moviesapp.netlify.app"><BiLinkExternal className='link'/></a>
</div>
</div>

</div>
<div className="projects">

<div  className="left">
<h1 >Login Register Form</h1>
<img src="login.jpg" alt="imdb" />
</div>

<div  className="right">
<p>It is a Login and register form where user can create
account and login to there profile.<br/>
It is built using MERN Stack.
.</p>
<div className="links">
<a href="https://github.com/Hitesh-Singh09"><BsGithub className='link'/></a>
<a href=""><BiLinkExternal className='link'/></a>
</div>
</div>



</div>

<div className="projects">


<div  className="left">
<h1 >Weather App</h1>
<img src="weather.jpg" alt="imdb" />
</div>


<div  className="right">
<p >User can view the weather in his/her current city location.<br/> The weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, wind speed,sunrise and sunset , max-min temp.</p>
<div className="links">
<a href="https://github.com/Hitesh-Singh09"><BsGithub className='link'/></a>
<a href="https://instant-weather-report.netlify.app"><BiLinkExternal className='link'/></a>
</div>
</div>

</div>
<div className="projects">

<div  className="left">
<h1>Restaurant Website</h1>
<img src="Project2.png" alt="imdb" />
</div>

<div  className="right">
<p >This is a responsive restaurant website built using React
JS. </p>
<div className="links">
<a href="https://github.com/Hitesh-Singh09"><BsGithub className='link'/></a>
<a href="https://restaurant-site123.netlify.app/"><BiLinkExternal className='link'/></a>
</div>
</div>

</div>

      
    </div> 
    
    </div>
    </section>
    
    
    
   
    
    


    </>
  )
}

export default Projects
