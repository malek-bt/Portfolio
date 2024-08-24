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
import rest_countries from "../images/rest_countries.png";
import toDoApp from "../images/to_do_app.png";
import huddle_landing from "../images/huddle-landing-page.png";
import github_search from "../images/github_search.png";
const projects = [
  {
    img: rest_countries,
    live: "https://rest-countries-malek-bt.vercel.app/",
    github: "https://github.com/malek-bt/Rest-countries",
    title: "Rest Countries",
    describe:
      "Web application project that utilizes the Rest Countries API to display information about different countries.",
  },
  {
    img: toDoApp,
    live: "",
    github: "https://github.com/malek-bt/ToDo_app_front",
    title: "To Do App",
    describe:
      "Simple Full Stack Todo App . It provides a basic structure for managing and displaying tasks.",
  },
  {
    img: testimentional,
    live: "https://malek-bt.github.io/Testimonials-grid-section/",
    github: "https://github.com/malek-bt/Testimonials-grid-section",
    title: "Testimonial",
    describe:
      "Responsive testimonial cards that display testimonials of different verified graduates with a peek-and-slide animation effect.",
  },
  
  {
    img:github_search ,
    live: "https://github-search-malek-bt.vercel.app/",
    github: "https://github.com/malek-bt/github-search",
    title: "Github Search",
    describe:
      "Web application project that utilizes the Github API to search for users and display their profile information and repositories.",
  },
  {
    img: huddle_landing,
    live: "https://huddle-landing-page-with-alternating-feature-blocks-challenge.vercel.app/",
    github: "https://github.com/malek-bt/Huddle-landing-page-with-alternating-feature-blocks-challenge",
    title: "Huddle landing page",
    describe:
      "Responsive huddle landing page with alternating feature blocks challenge.",
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
      "creating a landing page for a company called Clipboard, which offers a clipboard manager tool for organizing and sharing text snippets.",
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
