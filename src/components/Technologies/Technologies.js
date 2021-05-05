import React from "react";
import "./Technologies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Technologies = () => {
  return (
    <div id="technologies" className="technologies">
      <h1 className="py-5">Frameworks & Technologies</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faReact} size="2x" />
              </div>
              <h3>ReactJS</h3>
              {/* <p>ReactJS apps.</p> */}
            </div>
          </div>
          {/* - */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCss3Alt} size="2x" />
              </div>
              <h3>CSS 3</h3>
              {/* <p>ReactJS apps.</p> */}
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faHtml5} size="2x" />
              </div>
              <h3>HTML 5</h3>
              {/* <p>ReactJS apps.</p> */}
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faBootstrap}
                  size="2x"
                />
              </div>
              <h3>Bootstrap</h3>
              {/* <p>ReactJS apps.</p> */}
            </div>
          </div>
          {/* - */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faJsSquare} size="2x" />
              </div>
              <h3>JavaScript</h3>
              {/* <p>ReactJS apps.</p>{" "} */}
            </div>
          </div>
          {/* - */}
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDatabase} size="2x" />
              </div>

              <h3>T-SQL</h3>
              {/* <p>ReactJS apps.</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
