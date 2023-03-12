import React from "react";
import "../styles/header.css";
import { useInView } from "react-intersection-observer";
import image from "../images/header.png";
const HeaderInfo = () => {
  const { ref, inView } = useInView();
  return (
    <section
      className="header"
      id="header"
      ref={ref}
    >
      {inView && (
        <div>
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
              <p className="p-text">Frontend Developer</p>
            </div>
          </div>
          <button>Resume</button>
        </div>
      )}
      <div ref={ref}>{inView && <img src={image}></img>}</div>
    </section>
  );
};

export default HeaderInfo;
