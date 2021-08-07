import React from "react";
import pourdecisions from "../../assets/portfolio/pourdecisions.jpg";
import eventbus from "../../assets/portfolio/eventbus.jpg";
import foodfestival from "../../assets/portfolio/foodfestival.jpg";
import taskmasterpro from "../../assets/portfolio/taskmasterpro.png";
import weatherbuddy from "../../assets/portfolio/weatherbuddy.png";
import dayplannerpro from "../../assets/portfolio/dayplannerpro.png";

function Projects() {
  return (
    <div>
      <div className=" flex align-center vh">
        <div className="flex-row project-row col-12 justify-center text-center">
          {/*Pour Decisions*/}
          <div className="col-3 project card">
            <div className="card-body">
              <a
                href="https://pour-decisions.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={pourdecisions}
                  className="project-img"
                  alt="texas wine glass"
                />
              </a>
              <div className="card-header">Pour Decisions</div>
              <div className="project-description">
                {" "}
                Texas Hill Country Winery Reviewing App: Created using Node,
                Express, Handlebars, MySQL2, and Sequelize{" "}
              </div>
              <div className="project-link flex-row justify-space-between">
                <a
                  href="https://pour-decisions.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Link
                </a>
                <a
                  href="https://github.com/misn0147/pour-decisions"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          {/*EventBus*/}
          <div className="col-3 project card">
            <div className="card-body">
              <a
                href="https://rarchita12.github.io/EventBus/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={eventbus}
                  className="project-img"
                  alt="reading a map in the car"
                />
              </a>
              <div className="card-header">EventBus</div>
              <div className="project-description">
                {" "}
                Get driving directions to TicketMaster events: created using
                Foundation, Moment, and third-party APIs{" "}
              </div>
              <div className="project-link flex-row justify-space-between">
                <a
                  href="https://rarchita12.github.io/EventBus/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Link
                </a>
                <a
                  href="https://github.com/Rarchita12/EventBus"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          {/*Food Festival*/}
          <div className="col-3 project card">
            <div className="card-body">
              <a
                href="https://aweghorst.github.io/food-festival/index.html"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={foodfestival}
                  className="project-img"
                  alt="closeup of chips and drinks"
                />
              </a>
              <div className="card-header">Food Festival</div>
              <div className="project-description">
                {" "}
                Website converted to a Progressive Web Application: Created
                using webpack, JavaScript optimizations, Service Workers{" "}
              </div>
              <div className="project-link flex-row justify-space-between">
                <a
                  href="https://aweghorst.github.io/food-festival/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Link
                </a>
                <a
                  href="https://github.com/aweghorst/food-festival"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-row project-row col-12 justify-center text-center">
          {/*TaskMaster Pro*/}
          <div className="col-3 project card">
            <div className="card-body">
              <a
                href="https://aweghorst.github.io/taskmaster-pro/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={taskmasterpro}
                  className="project-img"
                  alt="buttons to add and delete tasks on the app"
                />
              </a>
              <div className="card-header">TaskMaster Pro</div>
              <div className="project-description">
                {" "}
                Task Progress Tracking App: Created using jQuery, datepicker,
                and Modals.{" "}
              </div>
              <div className="project-link flex-row justify-space-between">
                <a
                  href="https://aweghorst.github.io/taskmaster-pro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Link
                </a>
                <a
                  href="https://github.com/aweghorst/taskmaster-pro"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          {/*Weather Buddy*/}
          <div className="col-3 project card">
            <div className="card-body">
              <a
                href="https://aweghorst.github.io/WeatherBuddy/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={weatherbuddy}
                  className="project-img"
                  alt="Search box and search history for the app"
                />
              </a>
              <div className="card-header">WeatherBuddy</div>
              <div className="project-description">
                {" "}
                Weather Lookup App that gives current and a 5 day forecast:
                Created using jQuery, moment.js, and Third Party APIs{" "}
              </div>
              <div className="project-link flex-row justify-space-between">
                <a
                  href="https://aweghorst.github.io/WeatherBuddy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Link
                </a>
                <a
                  href="https://github.com/aweghorst/WeatherBuddy"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
          {/*Day Planner Pro*/}
          <div className="col-3 project card">
            <div className="card-body">
              <a
                href="https://aweghorst.github.io/day-planner-pro/"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={dayplannerpro}
                  className="project-img"
                  alt="color coordinated hourly task tracker"
                />
              </a>
              <div className="card-header">Day Planner Pro</div>
              <div className="project-description">
                {" "}
                Hourly Time Tracking App: Created using jQuery, Bootstrap, and
                moment.js{" "}
              </div>
              <div className="project-link flex-row justify-space-between">
                <a
                  href="https://aweghorst.github.io/day-planner-pro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed Link
                </a>
                <a
                  href="https://github.com/aweghorst/day-planner-pro"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
