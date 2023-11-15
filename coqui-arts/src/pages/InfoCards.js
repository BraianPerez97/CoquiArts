//This component is the Profile Tips section of the app after sign-up and welcome

//Dependencies
import React from "react";
import { Link } from "react-router-dom";
import ThreePIcon from "@mui/icons-material/ThreeP";
import TaskIcon from "@mui/icons-material/Task";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import AddLinkIcon from "@mui/icons-material/AddLink";

//Images

export const InfoCards = () => {
  //Tips array
  const tips = [
    {
      photo: ThreePIcon,
      name: "First Impressions Matter",
      description:
        "Your profile is your digital identity. Invest time in crafting it. Showcase your skills, experience, and personality to make a positive impact on potential clients and land in different opportunities",
    },
    {
      photo: TaskIcon,
      name: "Be honest",
      description:
        "Describe your work accurately and honestly. It's tempting to exaggerate, but transparency and integrity build trust. Clients value honesty in your skillset and previous work.",
    },
    {
      photo: FaceRetouchingNaturalIcon,
      name: "Profile Picture",
      description:
        "Your profile picture is your online handshake. Choose a professional image that represents you well. A clear, friendly, and approachable photo can make a big difference.",
    },
    {
      photo: AddLinkIcon,
      name: "Connect with the world",
      description:
        " Link your other social media profiles. Show clients your broader online presence, reinforcing your professionalism and expertise.",
    },
  ];
  function categorySelected(name) {
    console.log(`${name}`);
  }
  return (
    <section className=" container3">
      <div className="form">
        <h1 className="card-title info-title">
          What makes a good <span>CoquiArts</span> profile?
        </h1>
        <span className="info-sub">
          Remember, your profile is the key to connecting with clients. A
          well-crafted profile can open doors to exciting opportunities.
        </span>

        <div className="cat">
          {tips.map((tip) => (
            <div
              className=" info-item"
              onClick={() => categorySelected(tip.name)}
            >
              <p id="cat-img">
                <tip.photo sx={{ fontSize: "2em" }}> </tip.photo>
              </p>

              <h6 className="">{tip.name}</h6>
              <p className="tip-description">{tip.description}</p>
            </div>
          ))}
        </div>
        <Link exact to="/edit-profile">
          <button type="button" className="btn continue next">
            NEXT
          </button>
        </Link>
      </div>
    </section>
  );
};

export default InfoCards;
