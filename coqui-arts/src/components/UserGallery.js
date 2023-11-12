// This component is a user carousel based on the categorie

// Dependencies | Axios to query db
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ListCategory from "./ListCategory";
//tester - to delete
import profile_icon from "../assets/tester.jpg";

function UserGallery() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Bring user by categories
    axios
      .get("http://localhost:5001/api/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect((userId) => {
    //Bring user selected
    axios
      .get(`http://localhost:5001/api/user/${userId}`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="gallery">
      <div className="userNav">
        <ListCategory></ListCategory>
      </div>

      <div id="users" className=" upc">
        <ul className=" profile-down product-list-container">
          {/* Display all user from category query */}
          {users.map(
            (user) => (
              {
                /* Give each user a link to their profile card */
              },
              (
                <Link to={`/user/${user.id}`} key={user.id}>
                  <li className="profile-down product-card" key={user.id}>
                    <div className="gradiant"></div>
                    <img src={profile_icon} alt=""></img>
                    <h3 className="userName profile-title">
                      {[user.first_name, " ", user.last_name]}
                    </h3>
                    <div className="profile-description">Lorem</div>
                    <div className="profile-button">
                      <a href={"mailto:" + user.email}>{user.email}</a>
                    </div>
                  </li>
                </Link>
              )
            )
          )}
        </ul>
      </div>
    </div>
  );
}
export default UserGallery;
