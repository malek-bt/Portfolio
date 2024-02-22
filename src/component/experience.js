import "../styles/experience.css";
const Experience = () => {
  return (
    <section className="" id="experience">
      <h2 className="h2">
        Experience <hr></hr>
      </h2>
      <div className="bloc">
        <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
          <circle r="20" cx="50" cy="25" fill="#ff7582" />
          Sorry, your browser does not support inline SVG.
        </svg>
        <div className="line"></div>
        <div className="experience">
          <h3 className="position">
            Technical Team Leader <span> @Caustaza Group LTD</span>
          </h3>

          <h4 className="duration">September 2023 - January 2024</h4>
          <p className="desc">
            Led a dynamic team in creating an innovative billing microservice
            and overseeing the development of a mobile application, ensuring
            seamless integration of cutting-edge technologies and successful
            project execution.
          </p>
        </div>
      </div>
      
      <div className="bloc">
        <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
          <circle r="20" cx="50" cy="25" fill="#ff7582" />
          Sorry, your browser does not support inline SVG.
        </svg>
        <div className="line"></div>
        <div className="experience">
          <h3 className="position">
            Frontend developer Intern <span> @Caustaza Group LTD</span>
          </h3>

          <h4 className="duration">June 2023 - August 2023</h4>
          <p className="desc">
            As a summer intern, I significantly contributed to the front-end
            development of a recruitment microservice, enhancing the user
            experience by seamlessly integrating with the backend using RESTful
            APIs, and played a key role in creating intuitive interfaces for job
            postings and data analysis projects.
          </p>
        </div>
      </div>
      <div className="bloc">
        <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
          <circle r="20" cx="50" cy="25" fill="#ff7582" />
          Sorry, your browser does not support inline SVG.
        </svg>
        <div className="experience ">
          <h3 className="position">
            Frontend developer Intern <span> @Vastsky123</span>
          </h3>
          <h4 className="duration">June 2023 - August 2023</h4>
          <p className="desc">
            During my summer internship, I played a key role in integrating the
            front-end of an e-learning platform based on Figma designs. Using
            ReactJS and Tailwind CSS, I brought visual concepts to life,
            ensuring a seamless and visually appealing user interface. Moreover,
            I successfully integrated the backend with RESTful APIs,
            establishing effective communication for a fully functional and
            responsive online learning experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
