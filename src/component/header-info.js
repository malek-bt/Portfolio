import React from "react";
import "../styles/header.css";
import image from "../images/header.png";
import malek from "../images/maleek.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import resume from "../resume/Malek Bentaher.pdf";

const HeaderInfo = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const headerAnimation = useAnimation();
  const imageAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      headerAnimation.start({
        transform: "translateX(0)",
        opacity: 1,
        transition: {
          duration: 0.9 , ease:"easeInOut" , 
        },
      });
      imageAnimation.start({
        transform: " scale(100%)",
        opacity: 1,
        transition: {
          duration: 0.9 , ease:"easeInOut" , 
        },
      });
    }
    if (!inView) {
      headerAnimation.start({
        transform: "translateX(-80px)",
        opacity: 0,
        transition: {
          duration: 0,
        },
      });
      imageAnimation.start({
        transform: " scale(0%)",
        opacity: 0,
        transition: {
          duration: 0 , ease:"easeInOut" , 
        },
      });
    }
  }, [inView]);

  return (
    <section className="header" id="header" ref={ref}>
      <motion.div animate={headerAnimation}>
        <div className="infos">
          <span>👋</span>

          <div className="title">
            <p className="p-text">Hello, I'm</p>
            <h1 className="head-text ">
              <span>M</span>
              <span>a</span>
              <span>l</span>
              <span>e</span>
              <span>k</span>
            </h1>
            <p className="p-text">Full Stack Developer</p>
          </div>
        </div>
        <button className="btn" ><a href={resume} download>Resume</a></button>
      </motion.div>

      <motion.div animate={imageAnimation}>
        <div className="div-img">
        <img src={malek} alt="personal-image"></img>
        </div>
        
      </motion.div>
    </section>
  );
};

export default HeaderInfo;
