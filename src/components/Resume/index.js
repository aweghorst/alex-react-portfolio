import React from "react";
import AlexWeghorstResume from "../../assets/resume/AlexWeghorstResume.pdf";

function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">Resume</h1>
      <a className="resume-download" href={AlexWeghorstResume}>
        <button>Download Resume</button>
      </a>
      <h3 className="text-center">MERN Stack Skills</h3>

      <div className=" flex align-center container">
        <div className="flex-row skill-row text-center">
          <div className="col-2 skill">Bootstrap</div>
          <div className="col-2 skill">CSS</div>
          <div className="col-2 skill">Express</div>
          <div className="col-2 skill">Git</div>
        </div>
        <div className="flex-row skill-row text-center">
          <div className="col-2 skill">HTML</div>
          <div className="col-2 skill">JavaScript</div>
          <div className="col-2 skill">JQuery</div>
          <div className="col-2 skill">Mongoose</div>
        </div>
        <div className="flex-row skill-row text-center">
          <div className="col-2 skill">MySQL</div>
          <div className="col-2 skill">Node</div>
          <div className="col-2 skill">NoSQL</div>
          <div className="col-2 skill">Object Oriented Programming</div>
        </div>
        <div className="flex-row skill-row text-center">
          <div className="col-2 skill">PWAs</div>
          <div className="col-2 skill">React</div>
          <div className="col-2 skill">Sequelize</div>
          <div className="col-2 skill">SPAs</div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
