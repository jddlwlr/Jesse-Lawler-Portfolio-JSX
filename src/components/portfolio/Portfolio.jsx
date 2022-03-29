import React from "react";
import "./portfolio.css";
import thrve from "assets/thrve.jpg";
import workday from "assets/workdayImage.png";
import lucky from "assets/search-criteria.jpg";
import weather from "assets/CityWeatherHub.jpg";

const Portfolio = () => {
  return (
    <>
      {" "}
      {/* <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      ></link> */}
      <section className="portfolio" id="portfolio">
        <section className="py-5" id="projects">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-center">
                  <h2 className="fw-bolder">Projects</h2>
                  <p className="lead fw-normal text-muted mb-5">
                    Take a look at a few of the projects I've worked on
                    recently.
                  </p>
                </div>
              </div>
            </div>
            <div className="row gx-5">
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img className="card-img-top" src={lucky} alt="..." />
                  <div className="card-body p-4">
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="https://jddlwlr.github.io/You-Lucky-Dog/"
                    >
                      <h5 className="card-title mb-3">Lucky Dog</h5>
                    </a>
                    <p className="card-text mb-0">
                      An excersize in working with complex API's, local storage
                      and web design using HTML, CSS, JavaScript and teamwork.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="small">
                          <a href="https://github.com/jddlwlr/thrve-app">
                            Repository
                          </a>

                          <div className="text-muted">December 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img className="card-img-top" src={workday} alt="..." />
                  <div className="card-body p-4">
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="https://jddlwlr.github.io/workday_schedule_utility/"
                    >
                      <h5 className="card-title mb-3">Workday Scheduler</h5>
                    </a>
                    <p className="card-text mb-0">
                      A web application for scheduling ones day built using
                      local storage, JavaScript, HTML and CSS.
                    </p>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="small">
                          <a href="https://github.com/jddlwlr/workday_schedule_utility">
                            Repository
                          </a>
                          <div className="text-muted">November, 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img className="card-img-top" src={thrve} alt="..." />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      Thrve
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="https://github.com/jddlwlr/thrve-app"
                    >
                      <h5 className="card-title mb-3">
                        A full-stack health tracking application using node.js,
                        express, handlebars, and heroku.
                      </h5>
                    </a>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="small">
                          <a href="https://github.com/jddlwlr/thrve-app">
                            Repository
                          </a>

                          <div className="text-muted">Febuary 2022</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img className="card-img-top" src={weather} alt="..." />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      City Weather Hub
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href="https://jddlwlr.github.io/City-Weather-Hub/"
                    >
                      <h5 className="card-title mb-3">
                        A simple application used to display weather data based
                        on user input.
                      </h5>
                    </a>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="small">
                          <a href="https://github.com/jddlwlr/City-Weather-Hub">
                            Repository
                          </a>
                          <br></br>
                          Some issues with deployment exist.
                          <div className="text-muted">December 2021</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://ak.picdn.net/shutterstock/videos/10447868/thumb/9.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      Coming Soon!
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href=""
                    >
                      <h5 className="card-title mb-3">
                        More and more advanced projects are underway
                      </h5>
                    </a>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="small">
                          <div className="text-muted">Soon!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-5">
                <div className="card h-100 shadow border-0">
                  <img
                    className="card-img-top"
                    src="https://ak.picdn.net/shutterstock/videos/10447868/thumb/9.jpg"
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      Coming Soon!
                    </div>
                    <a
                      className="text-decoration-none link-dark stretched-link"
                      href=".."
                    >
                      <h5 className="card-title mb-3">
                        More and more advanced projects are underway
                      </h5>
                    </a>
                  </div>
                  <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                    <div className="d-flex align-items-end justify-content-between">
                      <div className="d-flex align-items-center">
                        <div className="small">
                          <div className="text-muted">Soon!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Portfolio;
