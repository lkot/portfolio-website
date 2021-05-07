import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Technologies from "./components/Technologies/Technologies";
import Experience from "./components/Experience/Experience";
import Portfolio from "./components/Portfolio/Portfolio";
import Ventures from "./components/Ventures/Ventures";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import NewNavbar from "./components/Navbar/NewNavbar";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            // The 'shape' object will basically shape the particles.
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#B4E6FB",
              },
            },
          },
        }}
      />
      {/* <NewNavbar /> */}
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <Technologies />
      <Experience />
      <Ventures />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
