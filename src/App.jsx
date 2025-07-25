import './App.css'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skill from './components/Skills/Skill';
import Parallax from './components/parallax/parallax';



function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>  
     <About/>
     <Skill/>
     <Parallax/>
     <Projects/>
     <Contact/>
     <Footer/>

    </>
  );
}

export default App;

