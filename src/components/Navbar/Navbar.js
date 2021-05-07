import React from "react";
import "./Navbar.css";
import logo from "./logo-luk-kot-SD-2.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    //   <div className="container">
    //     <Link smooth={true} to="home" offset={-80}>
    //       <img className="logo" src={logo} alt="logo..." />
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="toggle navigation"
    //     >
    //       <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
    //     </button>

    // test bootstrapa

    // test bootstrapa

    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link smooth={true} to="home" offset={-80}>
          <img className="logo" src={logo} alt="logo..." />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown 1"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Contents
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown 1">
                <a
                  class="dropdown-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  href="#Contents"
                >
                  Contents
                </a>
              </div>
            </li>
          </ul>
        </div> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li> */}
            <li className="nav-item" aria-expanded="false">
              <Link
                smooth={true}
                to="about"
                offset={-80}
                className="nav-link"
                href="#"
                data-target=".navbar-collapse.show"
              >
                about me
              </Link>
            </li>
            <li className="nav-item" aria-expanded="false">
              <Link
                smooth={true}
                to="portfolio"
                offset={-80}
                className="nav-link"
                href="#"
                data-target=".navbar-collapse.show"
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item" aria-expanded="false">
              <Link
                smooth={true}
                to="technologies"
                offset={-80}
                className="nav-link"
                href="#"
                data-target=".navbar-collapse.show"
              >
                technologies
              </Link>
            </li>
            <li className="nav-item" aria-expanded="false">
              <Link
                smooth={true}
                to="experience"
                offset={-80}
                className="nav-link"
                href="#"
                data-target=".navbar-collapse.show"
              >
                experience
              </Link>
            </li>
            <li className="nav-item" aria-expanded="false">
              <Link
                smooth={true}
                to="ventures"
                offset={-80}
                className="nav-link"
                href="#"
                data-target=".navbar-collapse.show"
              >
                ventures
              </Link>
            </li>
            <li className="nav-item" aria-expanded="false">
              <Link
                smooth={true}
                to="contacts"
                offset={-80}
                className="nav-link"
                href="#"
                data-target=".navbar-collapse.show"
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
