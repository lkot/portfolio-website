import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>Australia & New Zealand Challenge</h3>
          <p>
            In 2019 I made few months long solo trip around Australia and New
            Zealand only by hitchhiking covering over 15 000km.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Doe 2" />
        <div className="myCarousel">
          <h3>Journey Around the World</h3>
          <p>
            As a member of project called “Z indexem w podróży”, sponsored by
            many companies, I organized and participated in a trip around the
            World. The journey resulted in episodes (made by our team)
            broadcasted by Telewizja Polska and on a YouTube platform.
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>Organizer of Travel Festival</h3>
          <p>
            Participated in the realization of nationwide travel festival called
            Zielone Globy.
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe 4" />
        <div className="myCarousel">
          <h3>Endeavours</h3>
          <p>
            In years 2013 and 2014 I’ve completed the Ironman 70.3 triathlon in
            Austria and Poland. In August 2017 I have ascended Caucasian
            five-thousander – Mount Kazbek in Georgia.
          </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
