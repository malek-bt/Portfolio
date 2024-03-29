import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { SiFrontendmentor } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import "../styles/navStyle.css";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      fixed="top"
      className="nav-bar"
    >
      <Container>
        <Navbar.Brand href="#home">
          <div className="nav-icons">
            <a
              className=" icon"
              href="https://github.com/malek-bt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>

            <a
              className=" icon"
              href="https://www.linkedin.com/in/bentaher-malek/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              className=" icon"
              href="https://www.frontendmentor.io/profile/malek-bt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFrontendmentor />
            </a>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto Nav-items">
            <Nav.Link href="#header" className="link">
              Home
            </Nav.Link>
            <Nav.Link href="#aboutMe" className="link">
              About
            </Nav.Link>
            <Nav.Link href="#work" className="link">
              Work
            </Nav.Link>
            <Nav.Link href="#experience" className="link">
              Experience
            </Nav.Link>
            <Nav.Link href="#skills" className="link">
              Skills
            </Nav.Link>
            <Nav.Link href="#contact" className="link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
