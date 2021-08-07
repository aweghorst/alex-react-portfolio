import React from "react";
import profile_img from "../../assets/portfolio/alex.jpg";

function About() {
  return (
    <section className="mt-4">
      <div className="flex-row mt-3">
        <img
          src={profile_img}
          alt="headshot of alex"
          className="col-3 profile-img"
        />
        <h1 className="col-9 text-center  header-text">
          Alex Weghorst
        </h1>
      </div>
      <div className="about-text mt-6">
        <h3>About Me</h3>
        <p>
          My name is Alex. First and foremost I consider myself a builder. My
          hobbies and life experiences have always involved me taking something
          broken, disassembling it, understanding it, and creating something of
          value that I can be proud of.
        </p>
        <p>
          This problem-solving mindset has helped me earn a Master's degree in
          Forensic Science and later transition into a general contractor taking
          neglected residential homes and transforming them into a product worth
          several times more than it's original value.
        </p>
        <p>
          As I look to further continue my pursuit of finding new ways to solve
          problems, I'm excited about the opportunities that a career as a
          full-stack developer provides.
        </p>
      </div>
    </section>
  );
}

export default About;
