import React from "react";
import "../styles/about.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const aboutAnimation = useAnimation();
  const cardsAnimation = useAnimation();
  useEffect(() => {
    if (inView) {
      aboutAnimation.start({
        transform: "translateX(0)",
        opacity: 1,
        transition: {
          duration: 1 /* ease:"ease" , */,
        },
      });
      cardsAnimation.start({
        transform: "translateX(0)",
        opacity: 1,
        transition: {
          duration: 1 /* ease:"ease" , */,
        },
      });
    }
    if (!inView) {
      aboutAnimation.start({
        transform: "translateX(-200px)",
        opacity: 0,
        transition: {
          duration: 0,
        },
      });
      cardsAnimation.start({
        transform: "translateX(100px)",
        opacity: 0,
        transition: {
          duration: 0,
        },
      });
    }
  }, [inView]);
  return (
    <section className="global-section " id="aboutMe" ref={ref}>
      <h2 className="h2">
        About me <hr></hr>
      </h2>

      <motion.article className="about" animate={aboutAnimation}>
        <h3 className="h3">Information about me</h3>
        <p className="description">
          I am highly skilled in creating responsive, mobile-friendly designs
          that are both visually appealing and easy to navigate. I pay close
          attention to detail and strive to create pixel-perfect designs that
          exceed client expectations.
        </p>
      </motion.article>

      <motion.article className="about-items" animate={cardsAnimation}>
        <div className="item">
          <span>9+</span>
          <p>MONTHS OF PRACTICE</p>
        </div>

        <div className="item">
          <span>100%</span>
          <p>WILLINGNESS TO LEARN</p>
        </div>

        <div className="item">
          <span>100%</span>
          <p>DEDICATION AND HARD WORK</p>
        </div>
      </motion.article>
    </section>
  );
};

export default About;
