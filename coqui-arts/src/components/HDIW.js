import React from "react";
import Search from "../assets/infoGraphics/search.jpg";
import Hire from "../assets/infoGraphics/hire.jpg";
import Done from "../assets/infoGraphics/done.jpg";

const HDIW = () => {
  return (
    <section className="HW">
      <h1 className="HW-title">
        How does it <span>work</span>?
      </h1>

      <div className="photo">
        <div className="photo-card">
          <img
            src={Search}
            alt="searching for freelenacer"
            className="infoGraphics"
          ></img>
          <div className="photo-text">
            <h3>Search</h3>
            <p>Discover talented freelancers in Puerto Rico.</p>
          </div>
        </div>

        <div className="photo-card">
          <img
            src={Hire}
            alt="searching for freelenacer"
            className="infoGraphics"
          ></img>
          <div className="photo-text">
            <h3>Hire</h3>
            <p>Get in touch and discuss projects and opportunities.</p>
          </div>
        </div>

        <div className="photo-card">
          <img
            src={Done}
            alt="searching for freelenacer"
            className="infoGraphics"
          ></img>
          <div className="photo-text">
            <h3>Done!</h3>
            <p>Get your project delivered and done. It’s that simple.</p>
          </div>
        </div>
      </div>
      <div id="browse">
      <btn  type="button" id='browse'>
        <span className="button-2">Browse talent</span>
      </btn>
      </div>
    </section>
  );
};

export default HDIW;
