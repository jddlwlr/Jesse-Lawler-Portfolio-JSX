import React from "react";
import "./nav.css";
import { IoHome, IoBody, IoChatbubble, IoTerminal } from "react-icons/io5";

const Nav = () => {
  return (
    <nav>
      <a href="#asad">
        <IoHome />
      </a>
      <a href="#about">
        <IoBody />
      </a>
      <a href="#contact">
        <IoChatbubble />
      </a>
      <a href="#projects">
        <IoTerminal />
      </a>
    </nav>
  );
};

export default Nav;
