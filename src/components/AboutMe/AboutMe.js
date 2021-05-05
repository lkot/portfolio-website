// import classes from "*.module.sass";
import React from "react";
import authorImg from "../../me.jpg";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    //    These e.g. "container py-5" classes are the Bootstrap classes.
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={authorImg} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            I find myself as a team player and strongly value the true team
            spirit. Always eager to expand and improve my programming skills. At
            the start of my career I have already acquired some experience
            working both with back-end and front-end.
            <br />
            <br />
            Currently I am aspiring to become a Front-end Developer as this part
            of programming brings me the most fun. However I am eager to join
            and help to develop all kinds of projects. Definitely I am no
            stranger to the new tasks and challenges.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
