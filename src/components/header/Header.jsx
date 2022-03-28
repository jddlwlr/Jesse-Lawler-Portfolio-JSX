import React from "react";
import "./header.css";
import { BsLinkedin, BsGithub, BsMailbox } from "react-icons/bs";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Jesse Lawler</h1>
        <h5>Full Stack Developer</h5>
        <div className="callto">
          <a href="#contact" className="btn">
            Contact
          </a>
          <a href="/src/assets/JesseLawlerResume.pdf" download className="btn">
            Download Resume
          </a>
        </div>
        <div className="HeaderSocials">
          <a
            href="https://linkedin.com/in/jddlwlr"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={30} />
          </a>
          <a href="https://github.com/jddlwlr" target="_blank" rel="noreferrer">
            <BsGithub size={30} />
          </a>
          <a href="mailto:jedd.lawler@gmail.com?subject= Saw your portfolio!">
            <BsMailbox size={30} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
