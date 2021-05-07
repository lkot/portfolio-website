import React from "react";
import "./Portfolio.css";
import taskManager from "../../images/undraw-press-play.png";
import netflix from "../../images/undraw-portfolio-website.png";
import cityGuide from "../../images/undraw-react.png";
import portfolio from "../../images/undraw-website.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="Netflix Clone Project..."
        />
        <hr />
        <p>
          KrewSystem is a further development of Blood Donation Center System
          via implementation of web portal for servicing blood donors.
          Application is an extension of already existing BDC's system and is
          dedicated for local departments of Lubuskie region located in 5 other
          cities.
        </p>
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://catssoft.pl/")}
        >
          https://catssoft.pl/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Portfolio Projects.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cityGuide}
          alt="City Guide App Project..."
        />
        <hr />
        <p>
          My own portoflio website. Technologies used: ReactJS, Bootstrap, CSS,
          HTML.
        </p>
        {/* <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://city-guide-app-project.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://city-guide-app-project.herokuapp.com/
        </a>
        <br /> */}
        <b>Website:</b>{" "}
        <a
          className="hyper-link"
          onClick={() => window.open("https://lukaszkot.biz", "_blank")}
        >
          https://github.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "Portfolio Projects.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Portfolio Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://portfolio-rea-and-material-ui.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://portfolio-rea-and-material-ui.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/8020Coding/portfilio", "_blank")
          }
        >
          https://github.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio Projects.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={taskManager}
          alt="Task Manager React and Redux Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://react-redux-task-manager.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://react-redux-task-manager.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/8020Coding/task-manager", "_blank")
          }
        >
          https://github.com/
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Portfolio Projects.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Projects' Portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={netflix}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img
              className="portfolio-image"
              src={cityGuide}
              alt="City Guide Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img
              className="portfolio-image"
              src={portfolio}
              alt="Portfolio React and Material UI Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div
            className="portfolio-image-box"
            onClick={openPopupboxTaskManager}
          >
            <img
              className="portfolio-image"
              src={taskManager}
              alt="Task Manager React and Redux Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <div>
        <PopupboxContainer {...popupboxConfigNetflix} />
        <PopupboxContainer {...popupboxConfigCityGuide} />
        <PopupboxContainer {...popupboxConfigPortfolio} />
        <PopupboxContainer {...popupboxConfigTaskManager} />
      </div>
    </div>
  );
};

export default Portfolio;
