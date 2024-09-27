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
            Full-stack developer <span> @Caustaza Group LTD</span>
          </h3>

          <h4 className="duration">September 2023 - Present</h4>
          <p className="desc">
            As a full-stack developer for the Smart Invoice project, I
            contribute to streamlining invoice management through the
            development of efficient web pages. I implement
            front-end APIs to enhance user interactions and develop robust
            RESTful APIs to support diverse functionalities, ensuring seamless
            communication between the front-end and back-end systems
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
