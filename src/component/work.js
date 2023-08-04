import React from "react";
import "../styles/work.css";
import testimentional from "../images/testimentional.png";
import result_summary from "../images/result-summary.png";
import interactive from "../images/interactive.png";
import base_apparel from "../images/base-apparel.png";
import signup from "../images/signup.png";
import status from "../images/status.png";
import fylo from "../images/fylo.png";
import clipboard from "../images/clipboard.png";
import Card from "./card";

const projects = [
  {
    img: testimentional,
    live: "https://malek-bt.github.io/Testimonials-grid-section/",
    github: "https://github.com/malek-bt/Testimonials-grid-section",
    title: "Testimonial",
    describe:
      "Responsive testimonial cards that display testimonials of different verified graduates with a peek-and-slide animation effect.",
  },
  {
    img: result_summary,
    live: "https://malek-bt.github.io/Results-Summary-Component/",
    github: "https://github.com/malek-bt/Results-Summary-Component",
    title: "Summary Card",
    describe:
      "Responsive summary card component that displays a result summary of a particular skill or category with a peek-and-slide animation effect.",
  },
  {
    img: interactive,
    live: "https://malek-bt.github.io/Interactive-rating-component/",
    github: "https://github.com/malek-bt/Interactive-rating-component",
    title: "Interaction Rating Component",
    describe:
      "Simple interaction rating component allows users to rate their experience on a scale of 1-5 stars.",
  },
  {
    img: signup,
    live: "https://malek-bt.github.io/Intro-component-with-sign-up-form/",
    github: "https://github.com/malek-bt/Intro-component-with-sign-up-form",
    title: "Signup Form",
    describe:
      "Responsive sign-up form that includes validation and error messages.",
  },
  {
    img: base_apparel,
    live: "https://malek-bt.github.io/Base-Apparel-coming-soon-page/",
    github: "https://github.com/malek-bt/Base-Apparel-coming-soon-page",
    title: "Base Apparel coming soon page",
    describe:
      "Responsive Base Apparel coming soon page that includes a subscription form with email validation.",
  },
  {
    img: status,
    live: "https://malek-bt.github.io/Stats-preview-card-component/",
    github: "https://github.com/malek-bt/Stats-preview-card-component",
    title: "Stats preview card",
    describe: "Responsive Stats preview card component .",
  },
  {
    img: fylo,
    live: "https://ffylo-data.vercel.app/",
    github: "https://github.com/malek-bt/Fylo-data-storage",
    title: "Fylo data storage",
    describe:
      "Responsive webpage for a fictional company called Fylo, which offers cloud-based data storage services.",
  },
  {
    img: clipboard,
    live: "https://clipboard-landing-page-malek-bt.vercel.app/",
    github: "https://github.com/malek-bt/Clipboard-landing-page",
    title: "Clipboard landing page",
    describe:
      "creating a landing page for a fictional company called Clipboard, which offers a clipboard manager tool for organizing and sharing text snippets.",
  },
  
];
const Work = () => {
  return (
    <section className="work" id="work">
      <h2 className="h2">
        Work <hr></hr>
      </h2>
      <article className="cards">
        {projects.map((item, index) => (
          <div key={index}>
            <Card
              img={item.img}
              live={item.live}
              github={item.github}
              title={item.title}
              describe={item.describe}
            />
          </div>
        ))}
      </article>
    </section>
  );
};

export default Work;
