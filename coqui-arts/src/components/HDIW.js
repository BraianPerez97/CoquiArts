//This component is the section 'How Does It Works' (HDIW) of the app in home
import React from "react";

//Images
import Search from "../assets/infoGraphics/search.jpg";
import Hire from "../assets/infoGraphics/hire.jpg";
import Done from "../assets/infoGraphics/done.jpg";

//Steps array
const steps = [
  {
    photo: Search,
    alt: "searching for freelancers",
    class: "infoGraphics",
    text: {
      title: "Search",
      message: "Discover talented freelancers in Puerto Rico.",
    },
  },
  {
    photo: Hire,
    alt: "find and hire",
    class: "infoGraphics",
    text: {
      title: "Hire",
      message: "Get in touch and discuss projects and opportunities.",
    },
  },

  {
    photo: Done,
    alt: "done project",
    class: "infoGraphics",
    text: {
      title: "Done!",
      message: "Get your project done and delivered. It’s that simple.",
    },
  },
];
const HDIW = () => {
  return (
    <section className="HW">
      <h1 className="HW-title">
        How does it <span>work</span>?
      </h1>

      <div className="photo">
        {steps.map((step) => (
          <div className="photo-card">
            <img src={step.photo} alt={step.alt} className={step.class}></img>
            <div className="photo-text">
              <h3>{step.text.title}</h3>
              <p>{step.text.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div id="browse">
        <btn type="button" id="browse">
          <a href="#Cat">
            <span className="button-2">Browse talent</span>
          </a>
        </btn>
      </div>
    </section>
  );
};

export default HDIW;
