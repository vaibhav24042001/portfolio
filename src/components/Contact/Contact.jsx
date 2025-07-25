import React, { useRef ,useEffect} from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useState } from "react";
import Heading from '../Heading/Heading'
import AOS from 'aos';
import 'aos/dist/aos.css';



const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);


  



  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ns4xxvk",
        "template_ujmvl49",
        form.current,
        "WdeqEMUzg4w1YlO8r"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-form" id="contact">
        <div className="c-left">
          <div className="summary-contact">
           <Heading heading="Here's a contact form"/>
           <h2 data-aos="zoom-in" data-aos-duration="500">Have Any Questions ?</h2>
           <p>I am always open to new opportunities and challenges.If you have any questions,please feel free to contact me.</p>
          </div>
        </div>
        <div className="c-right ">

          <form 
          ref={form} onSubmit={sendEmail}>
            <input
            data-aos="zoom-in" data-aos-duration="700"  data-aos-delay="300"
              type="text"
              name="user_name"
              className="user"
              placeholder="Your Name Here"
            />
            <input
            data-aos="zoom-in" data-aos-duration="700"  data-aos-delay="300"
              type="email"
              name="user_email"
              className="user"
              placeholder="Your Email Here"
            />
            <textarea data-aos="zoom-in" data-aos-duration="700"  data-aos-delay="300" name="message" className="user" placeholder="Write your Message here"/>
 <a href> <button style={{marginTop:"1rem"}} type="submit" value="Send" className="color-button button ">Send</button></a>

            <span>{done && "Thankyou !! Your message is submitted"}</span>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
