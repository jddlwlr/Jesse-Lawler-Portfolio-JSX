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
              I've had the priveledge to work in multiple fields as a geologist.
              From rickety old oil rigs spitting crude and state of the art rigs
              drilling miles below the surface, to managing the cleanup of
              petroleum products spilled below the surface, to restaurants with
              refridgerant leaks. But, when our son came along I quit my job and
              have been in search of a new career path ever since. That brings
              us to today, where I am enrolled in the Georgia Tech full-stack
              web developer bootcamp and am learning as much as I can between
              snack-time and nap-time. I am hoping to use this bootcamp as a
              learning launchpad and to begin a career in tech.
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
