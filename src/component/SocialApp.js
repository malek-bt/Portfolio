import React from "react";
import "../styles/socialApp.css";
import "../styles/navStyle.css"
import { SiFrontendmentor } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const SocialApp = () => {
  
  return (
     <section className="Social-icons">
         <a className="icon" href="https://github.com/malek-bt">
            <BsGithub />
          </a>

          <a
            className="  icon"
            href="https://www.linkedin.com/in/malek-bentaher-361028222/"
          >
            <BsLinkedin />
          </a>
          <a
            className="icon"
            href="https://www.frontendmentor.io/profile/malek-bt"
          >
            <SiFrontendmentor />
          </a>
     </section>
  );
};

export default SocialApp;
