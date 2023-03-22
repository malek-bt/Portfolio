import React from "react";
import "../styles/skills.css";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import git from "../images/git.png";
import bootstrap from "../images/boot.png";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="h2">
        Skills <hr></hr>
      </h2>
      <div className="skills-list">
        <div className="skill-item">
          <div className="img-skill">
            <img src={html}></img>
          </div>
          <p>Html</p>
        </div>
        <div className="skill-item">
          <div className="img-skill">
            <img src={css}></img>
          </div>
          <p>Css</p>
        </div>
        <div className="skill-item">
          <div className="img-skill">
            <img src={js}></img>
          </div>
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <div className="img-skill">
            <img src={react}></img>
          </div>
          <p>ReactJS</p>
        </div>
        <div className="skill-item">
          <div className="img-skill">
            <img src={git}></img>
          </div>
          <p>Git</p>
        </div>

        <div className="skill-item">
          <div className="img-skill">
            <img src={bootstrap}></img>
          </div>
          <p>Bootstrap</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
