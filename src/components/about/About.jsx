import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_me">
          <article className="about_card">
            <div className="about_me_image">
              <img src={ME} alt="Jesse Lawler and toddler son" />
              <br></br>
            </div>
            <h4>
              I am a former geologist, stay-at-home dad and current web
              development student working to advance my coding abilities.
            </h4>
          </article>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <h1>Education</h1>
              <h2>B.S. Geology</h2>
              <h3>University of Georgia - 2013</h3>
              <h2>Full-Stack Web Developer Bootcamp</h2>
              <h3>Georgia Institute of Technology - 2022</h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
