import React from "react";
import "../styles/socialApp.css";
import "../styles/navStyle.css";
import { SiFrontendmentor } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const SocialApp = () => {
  return (
    <section className="Social-icons">
      <a className="icon" href="https://github.com/malek-bt" 
      target="_blank" rel="noopener noreferrer">
        <BsGithub />
      </a>

      <a
        className="  icon"
        href="https://www.linkedin.com/in/bentaher-malek/"
        target="_blank" rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        className="icon"
        href="https://www.frontendmentor.io/profile/malek-bt"
        target="_blank" rel="noopener noreferrer"
      >
        <SiFrontendmentor />
      </a>
    </section>
  );
};

export default SocialApp;
