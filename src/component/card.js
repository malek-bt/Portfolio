import React from "react";
import "../styles/work.css";
import { BsEyeFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Card = (props) => {
  return (
    <div className="card1">
      <div className="image">
        <img
          className="img1"
          src={props.img}
          alt=" project image"
        ></img>

        <div className="image-icons">
          <a
            className="icon1"
            href={props.live}
          >
            <BsEyeFill />
          </a>
          <a
            className="icon1"
            href={props.gitub}
          >
            <BsGithub />
          </a>
        </div>
      </div>

      <h4>{props.title}</h4>
      <p className="project-description">
        {props.describe}
      </p>
      <div className="project-icons1">
        <a
          className=" icon1"
          href={props.live}
        >
          <BsEyeFill />
        </a>
        <a
          className=" icon1"
          href={props.gitub}
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default Card;
