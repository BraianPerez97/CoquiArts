//Dependencies
import React from "react";
import {Link} from 'react-router-dom';
import ThreePIcon from "@mui/icons-material/ThreeP";
import TaskIcon from "@mui/icons-material/Task";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import AddLinkIcon from "@mui/icons-material/AddLink";

//Images

export const InfoCards = () => {
  /* ======================
        INFO CARDS 
  ========================*/
  const categories = [
    {
      photo: ThreePIcon,
      name: "First impression",
      description:
        "Take your time in curating your profile so you can fit with different opportunities",
    },
    {
      photo: TaskIcon,
      name: "Be trueful",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
    },
    {
      photo: FaceRetouchingNaturalIcon,
      name: "Upload photos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
    },
    {
      photo: AddLinkIcon,
      name: "Connect your socials",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
    },
  ];
  function categorySelected(name) {
    console.log(`${name}`);
  }

  //JSX | HTML
  return (
    <section className=" container3">
      <div className="form">
        <h1 className="card-title info-title">
          {" "}
          What makes a good <span>CoquiArts</span> profile?
        </h1>
        <span className="info-sub">
          First impressions matter. Create a profile that will stand out.
        </span>

        <div className="cat">
          {categories.map((category) => (
            <div
              className=" info-item"
              onClick={() => categorySelected(category.name)}
            >
              <p id="cat-img">
                <category.photo sx={{ fontSize: "2em" }}> </category.photo>
              </p>

              <h6 className="">{category.name}</h6>
              <p className="category-description">{category.description}</p>
            </div>
          ))}
        </div>
            <Link exact to='/edit-profile'>
        <button type="button" className="btn continue next">
          NEXT
        </button></Link>
      </div>
    </section>
  );
};

export default InfoCards;
