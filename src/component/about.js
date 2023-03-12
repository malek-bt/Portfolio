import React from "react";
import "../styles/about.css";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref, inView } = useInView();
  return (
    <section className="global-section " id="aboutMe" ref={ref}>
      <h2 className="h2">
        About me <hr></hr>
      </h2>
      {inView && (
        <article className="about">
          <h3 className="h3">Information about me</h3>
          <p className="description">
            I'm a frontend developer with a passion for creating exceptional web
            experiences that inspire and engage. My approach to development is
            equal parts technical expertise and artistic creativity.
          </p>
        </article>
      )}
      {inView && (
        <article className="about-items">
          <div className="item">
            <span>4+</span>
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
        </article>
      )}
    </section>
  );
};

export default About;
