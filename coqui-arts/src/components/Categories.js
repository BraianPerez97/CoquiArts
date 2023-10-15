import React from "react";
//Images
import Other from "../assets/categories/other.png";
import Graphics from "../assets/categories/graphic.png";
import Music from "../assets/categories/music.png";
import Murals from "../assets/categories/mural.png";
import Social from "../assets/categories/social.png";
import Events from "../assets/categories/event.png";
import Bake from "../assets/categories/bake.png";

const Categories = () => {
  return (
    <section className="home-categories app">
      <ul className="categories-list hs full">
        <li className="item">
    
            <img id="category-img" src={Graphics} alt="other categories"></img>

            <div className="category-text">
              <h4 className="category-title">Graphic Design & Illustration</h4>
              <p className="category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                suscipit adipiscing bibendum est.
              </p>
            </div>
          
        </li>

<li className="item">
    
            <img id="category-img" src={Music} alt="other categories"></img>

            <div className="category-text">
              <h4 className="category-title">Music & Jingles</h4>
              <p className="category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                suscipit adipiscing bibendum est.
              </p>
            </div>
          
        </li>

        <li className="item">
    
            <img id="category-img" src={Bake} alt="other categories"></img>

            <div className="category-text">
              <h4 className="category-title">Bakegoods</h4>
              <p className="category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                suscipit adipiscing bibendum est.
              </p>
            </div>
          
        </li>

        <li className="item">
    
            <img id="category-img" src={Murals} alt="other categories"></img>

            <div className="category-text">
              <h4 className="category-title">Muralist & Street Art</h4>
              <p className="category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                suscipit adipiscing bibendum est.
              </p>
            </div>
          
        </li>

        <li className="item">
    
            <img id="category-img" src={Social} alt="other categories" ></img>

            <div className="category-text">
              <h4 className="category-title">Social Media Content & Strategy</h4>
              <p className="category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                suscipit adipiscing bibendum est.
              </p>
            </div>
          
        </li>

        <li className="item">
    
            <img id="category-img" src={Events} alt="other categories"></img>

            <div className="category-text">
              <h4 className="category-title">Event Services</h4>
              <p className="category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                suscipit adipiscing bibendum est.
              </p>
            </div>
          
        </li>

        <li className="item">
    
            <img id="category-img" src={Other} alt="other categories"></img>

            <div className="category-text">
              <h4 className="category-title">Other</h4>
              <p className="category-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                suscipit adipiscing bibendum est.
              </p>
            </div>
          
        </li>


      </ul>
    </section>
  );
};
export default Categories;
