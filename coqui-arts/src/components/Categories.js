//This component is the section of categories in home
import React from "react";
import { Link } from "react-router-dom";

//Images
import Other from "../assets/categories/other.png";
import Graphics from "../assets/categories/graphic.png";
import Music from "../assets/categories/music.png";
import Murals from "../assets/categories/mural.png";
import Social from "../assets/categories/social.png";
import Events from "../assets/categories/event.png";
import Bake from "../assets/categories/bake.png";
import Photos from "../assets/categories/photography.png";

//Types of categories
const categories = [
  {
    photo: Photos,
    name: "Photography",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
  },
  {
    photo: Graphics,
    name: "Graphic Design & Illustration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
  },
  {
    photo: Music,
    name: "Music & Jingles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
  },
  {
    photo: Bake,
    name: "Bakegoods",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
  },
  {
    photo: Murals,
    name: "Muralists & Street Art",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
  },
  {
    photo: Social,
    name: "Social Media Content & Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
  },
  {
    photo: Events,
    name: "Event Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
  },
  {
    photo: Other,
    name: "Other",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nislsuscipit adipiscing bibendum est.",
  },
];

const Categories = () => {
  function categorySelected(name) {
    console.log(`${name}`);
  }

  return (
    <section className="home-categories app" id="Cat">
      <ul className="categories-list hs full">
        {/*Maps through types of categories array for DRY*/}
        {categories.map((category) => (
          <li className="item" onClick={() => categorySelected(category.name)}>
            {/*Navigates to 'category' but displays the name of the category*/}
            <Link to={`/${category.name}`} key={category.name}>
              <img
                id="category-img"
                src={category.photo}
                alt="photography category"
              ></img>

              <div className="category-text">
                <h4 className="category-title">{category.name}</h4>
                <p className="category-description">{category.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Categories;
