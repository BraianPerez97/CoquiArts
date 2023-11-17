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
      "Explore the art of capturing moments with our stunning photography collection. Immerse yourself in visual storytelling and discover the beauty of every frame.",
  },
  {
    photo: Graphics,
    name: "Graphic Design & Illustration",
    description:
      "Unleash your creativity with our Graphic Design & Illustration category. Dive into a world of vibrant visuals and artistic expression, where every design tells a unique story.",
  },
  {
    photo: Music,
    name: "Music & Jingles",
    description:
      "Indulge your auditory senses in our Music & Jingles section. From soulful melodies to catchy jingles, experience a symphony of sounds that elevate every moment.",
  },
  {
    photo: Bake,
    name: "Baked goods",
    description:
      "Satisfy your sweet cravings and explore the world of delectable Baked Goods. From mouthwatering pastries to heavenly cakes, treat yourself to a delightful culinary experience.",
  },
  {
    photo: Murals,
    name: "Muralists & Street Art",
    description:
      "Immerse yourself in the vibrant world of Muralists & Street Art. Witness the transformation of spaces through colorful expressions and bold creativity.",
  },
  {
    photo: Social,
    name: "Social Media Content & Strategy",
    description:
      "Enhance your online presence with our Social Media Content & Strategy offerings. Navigate the digital landscape with engaging content and effective strategies.",
  },
  {
    photo: Events,
    name: "Event Services",
    description:
      "Elevate your events with our comprehensive Event Services. From planning to execution, we turn your ideas into memorable experiences.",
  },
  {
    photo: Other,
    name: "Other",
    description:
      "Discover the unexpected in our eclectic Other category. From unique creations to unconventional services, find hidden gems that defy categorization.",
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
