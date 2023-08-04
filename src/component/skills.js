import React from "react";
import "../styles/skills.css";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import git from "../images/git.png";
import tailwind from "../images/tailwind.png";
import { useEffect, useRef } from "react";

const Skills = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logosSlide = logosRef.current.querySelector(".logos-slide");

    const copy = logosSlide.cloneNode(true);

    logosRef.current.appendChild(copy);
  }, []);
  return (
    <div className="skills" id="skills">
      <h2 className="h2">
        Skills <hr></hr>
      </h2>
      <div className="skills-list " ref={logosRef}>
        <div className="skill-item logos-slide  ">
          <div className="carousel">
            <div className="img-skill">
              <img src={html} alt="html logo"></img>

            </div>
            <div className="img-skill">
              <img src={css} alt="css logo"></img>
            </div>
            <div className="img-skill">
              <img src={js} alt="javascript logo"></img>
            </div>
            <div className="img-skill">
              <img src={react} alt="react logo"></img>
            </div>
            <div className="img-skill">
              <img src={git} alt="git logo"></img>
            </div>
            <div className="img-skill">
              <img src={tailwind} alt="tailwind logo"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
