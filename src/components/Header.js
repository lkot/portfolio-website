import React from "react";
import Typed from "react-typed";
import ButtonHover from "./Button";
import "./ButtonStyles.css";

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <canvas></canvas>
        {/* <h1>Hi! I'm Łukasz Kot, your future Software Developer!</h1> */}
        <h1>
          {/* Hi there, I'm Łukasz the Software Developer. Let's work together! */}
          Hi, I'm Łukasz the Software Ninja. Let's work together!
        </h1>
        {/* Using React-Typed package to display 'writing text animatiom'. */}
        <Typed
          className="typed-text"
          strings={[
            "ReactJS",
            "ASP.NET MVC Core",
            "Transact-SQL",
            "HTML/CSS",
            "Bootstrap 5",
            "JavaScript",
            "Entity Framework",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        {/* Later on I'll refactor the code for Router Links. */}
        <a href="#" className="btn-main-offer">
          contact me
        </a>
        {/* <ButtonHover /> */}
      </div>
    </div>
  );
};

export default Header;
