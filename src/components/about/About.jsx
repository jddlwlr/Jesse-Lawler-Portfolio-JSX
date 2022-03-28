import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h1>me</h1>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={ME} alt="Jesse Lawler and toddler son" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card"></article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
