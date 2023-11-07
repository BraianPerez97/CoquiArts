//UNDER CONSTRUCTION

import React from "react";
import What from "../assets/infoGraphics/What-we-do.png";
import Who from "../assets/infoGraphics/who-are-we.png";
import Vision from "../assets/infoGraphics/vision.png";

const FAQ = () => {
  return (
    <section className="about-us">
      <div className="about-right">
        <img src={What} alt="" className="about-img"></img>
        <div className="about-card">
          <h3>What do we do?</h3>
          <span>Connect you with creativity.</span>

          <p>
            We believe in the incredible talents of our local artist, and we’re
            on a mission to bring creativity to the forefront. Our service is
            designed to connect clients with amazing artists, fostering a
            vibrant community of talent that can flourish. This is a platform
            for artist by artist.
          </p>
        </div>
      </div>

      <div className="about-left">
        <img src={Who} alt="" className="about-img"></img>
        <div className="about-card">
          <h3>Who are we?</h3>
          <span>Artists helping artists.</span>

          <p>
            We are a passionate group of students with a shared love for both
            creativity and community. Driven by our belief in the immense
            potential of local artist, we’ve come together To build a bridge
            between their talents and those seeking unique artistic experiences.
          </p>
        </div>
      </div>

      <div className="about-right">
        <img src={Vision} alt="" className="about-img"></img>
        <div className="about-card">
          <h3>Our vision</h3>
          <span>Connect creativity.</span>

          <p>
            Our vision and mission is all about supporting our local creative
            ecosystem, connect artists to opportunities by showcasing their
            services in our platform in order for clients to reach out and find
            the perfect artistic touch for their projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
