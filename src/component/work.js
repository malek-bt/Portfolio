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
import { BsEyeFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Work = () => {
  return (
    <section className="work" id="work">
      <h2 className="h2">
        Work <hr></hr>
      </h2>
      <article className="cards">
        <div className="card1">
          <div className="image">
            <img
              className="img1"
              src={testimentional}
              alt="testimentional project image"
            ></img>

            <div className="image-icons">
              <a
                className="icon1"
                href="https://malek-bt.github.io/Testimonials-grid-section/"
              >
                <BsEyeFill />
              </a>
              <a
                className="icon1"
                href="https://github.com/malek-bt/Testimonials-grid-section"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <h4>Testimonial</h4>
          <p className="project-description">
            Responsive testimonial cards that display testimonials of different
            verified graduates with a peek-and-slide animation effect.
          </p>
          <div className="project-icons1">
            <a
              className=" icon1"
              href="https://malek-bt.github.io/Testimonials-grid-section/"
            >
              <BsEyeFill />
            </a>
            <a
              className=" icon1"
              href="https://github.com/malek-bt/Testimonials-grid-section"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="card1">
          <div className="image">
            <img
              className="img1"
              src={result_summary}
              alt="result summary  project image"
            ></img>

            <div className="image-icons">
              <a
                className="icon1"
                href="https://malek-bt.github.io/Results-Summary-Component/"
              >
                <BsEyeFill />
              </a>
              <a
                className="icon1"
                href="https://github.com/malek-bt/Results-Summary-Component"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <h4>Summary Card</h4>
          <p className="project-description">
            Responsive summary card component that displays a result summary of
            a particular skill or category with a peek-and-slide animation
            effect.
          </p>
          <div className="project-icons1">
            <a
              className=" icon1"
              href="https://malek-bt.github.io/Results-Summary-Component/"
            >
              <BsEyeFill />
            </a>
            <a
              className=" icon1"
              href="https://github.com/malek-bt/Results-Summary-Component"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="card1">
          <div className="image">
            <img
              className="img1"
              src={interactive}
              alt="interactive project image"
            ></img>

            <div className="image-icons">
              <a
                className="icon1"
                href="https://malek-bt.github.io/Interactive-rating-component/"
              >
                <BsEyeFill />
              </a>
              <a
                className="icon1"
                href="https://github.com/malek-bt/Interactive-rating-component"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <h4>Interaction Rating Component</h4>
          <p className="project-description">
            Simple interaction rating component allows users to rate their
            experience on a scale of 1-5 stars.
          </p>
          <div className="project-icons1">
            <a
              className=" icon1"
              href="https://malek-bt.github.io/Interactive-rating-component/"
            >
              <BsEyeFill />
            </a>
            <a
              className=" icon1"
              href="https://github.com/malek-bt/Interactive-rating-component"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="card1">
          <div className="image">
            <img className="img1" src={signup} alt="signup project image"></img>

            <div className="image-icons">
              <a
                className="icon1"
                href="https://malek-bt.github.io/Intro-component-with-sign-up-form/"
              >
                <BsEyeFill />
              </a>
              <a
                className="icon1"
                href="https://github.com/malek-bt/Intro-component-with-sign-up-form"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <h4>Signup Form</h4>
          <p className="project-description">
            Responsive sign-up form that includes validation and error messages.
          </p>
          <div className="project-icons1">
            <a
              className=" icon1"
              href="https://malek-bt.github.io/Intro-component-with-sign-up-form/"
            >
              <BsEyeFill />
            </a>
            <a
              className=" icon1"
              href="https://github.com/malek-bt/Intro-component-with-sign-up-form"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="card1">
          <div className="image">
            <img
              className="img1"
              src={base_apparel}
              alt="base apparel project image"
            ></img>

            <div className="image-icons">
              <a
                className="icon1"
                href="https://malek-bt.github.io/Base-Apparel-coming-soon-page/"
              >
                <BsEyeFill />
              </a>
              <a
                className="icon1"
                href="https://github.com/malek-bt/Base-Apparel-coming-soon-page"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <h4>Base Apparel coming soon page</h4>
          <p className="project-description">
            Responsive Base Apparel coming soon page that includes a
            subscription form with email validation.
          </p>
          <div className="project-icons1">
            <a
              className=" icon1"
              href="https://malek-bt.github.io/Base-Apparel-coming-soon-page/"
            >
              <BsEyeFill />
            </a>
            <a
              className=" icon1"
              href="https://github.com/malek-bt/Base-Apparel-coming-soon-page"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="card1">
          <div className="image">
            <img
              className="img1"
              src={status}
              alt="status preview project image"
            ></img>

            <div className="image-icons">
              <a
                className="icon1"
                href="https://malek-bt.github.io/Stats-preview-card-component/"
              >
                <BsEyeFill />
              </a>
              <a
                className="icon1"
                href="https://github.com/malek-bt/Stats-preview-card-component"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <h4>Stats preview card</h4>
          <p className="project-description">
            Responsive Stats preview card component .
          </p>
          <div className="project-icons1">
            <a
              className=" icon1"
              href="https://malek-bt.github.io/Stats-preview-card-component/"
            >
              <BsEyeFill />
            </a>
            <a
              className=" icon1"
              href="https://github.com/malek-bt/Stats-preview-card-component"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="card1">
          <div className="image">
            <img
              className="img1"
              src={fylo}
              alt="status preview project image"
            ></img>

            <div className="image-icons">
              <a className="icon1" href="https://ffylo-data.vercel.app/">
                <BsEyeFill />
              </a>
              <a
                className="icon1"
                href="https://github.com/malek-bt/Fylo-data-storage"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <h4>Fylo data storage</h4>
          <p className="project-description">
            Responsive webpage for a fictional company called Fylo, which offers
            cloud-based data storage services.
          </p>
          <div className="project-icons1">
            <a className=" icon1" href="https://ffylo-data.vercel.app/">
              <BsEyeFill />
            </a>
            <a
              className=" icon1"
              href="https://github.com/malek-bt/Fylo-data-storage"
            >
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="card1">
          <div className="image">
            <img
              className="img1"
              src={clipboard}
              alt="status preview project image"
            ></img>

            <div className="image-icons">
              <a
                className="icon1"
                href="https://clipboard-landing-page-malek-bt.vercel.app/"
              >
                <BsEyeFill />
              </a>
              <a
                className="icon1"
                href="https://github.com/malek-bt/Clipboard-landing-page"
              >
                <BsGithub />
              </a>
            </div>
          </div>

          <h4>Clipboard landing page</h4>
          <p className="project-description">
            creating a landing page for a fictional company called Clipboard,
            which offers a clipboard manager tool for organizing and sharing
            text snippets.
          </p>
          <div className="project-icons1">
            <a
              className=" icon1"
              href="https://clipboard-landing-page-malek-bt.vercel.app/"
            >
              <BsEyeFill />
            </a>
            <a
              className=" icon1"
              href="https://github.com/malek-bt/Clipboard-landing-page"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Work;
