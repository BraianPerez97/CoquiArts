// This component is the welcome card after sign-up | gets user's name and category

//Dependencies
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ListCategory from "./ListCategory";

//Images
import LogoType from "../assets/logos/LogoType.png";

const Welcome = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    passwd: '',
    first_name: '',
    last_name: '',
    category: '', // Assuming category is a string, modify accordingly if it's an ID
  });

  useEffect(() => {
    // Get signup data from sessionStorage
    const signupData = JSON.parse(sessionStorage.getItem('signup'));  
    const {email, password} = signupData;

    // Save email and password to state or local variables 
  }, []);

   const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    // Additional validation if needed

    try {
      // Send data to the server
      const response = await axios.post('/api/user/', formData);

      // If successful, navigate to the welcome page
      navigate("/sign-up/welcome/tips");
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show user a message, etc.
    }
  };

  return (
    <section className="login-card container container3">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="w-title">
            <h1 className="card-title2">Welcome to </h1>{" "}
            <img id="logotype" src={LogoType} alt="Coqui Arts Logo"></img>{" "}
          </div>
          <p className="card-p">Tell us about yourself</p>

          <input
            type="text"
            className="form-control"
            placeholder="Name or nickname"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <ListCategory></ListCategory>

          <Link exact to="/sign-up/welcome/tips">
            <button type="submit" className="btn continue">
              CONTINUE
            </button>
          </Link>

          <div className="w-message">
            <div>
              <p>
                Build trust by using your full name or professional nickname
              </p>
              <p className="mini-mess">
                Remember, you're trying to land with clients. Keep it friendly
                and easy to remember
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Welcome;
