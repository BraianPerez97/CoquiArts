// This is where the user manages its profile (CREATE/EDIT/DELETE) their profile
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function NameForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    profileImage: "",
    firstName: "",
    lastName: "",
    category: "",
    email: "",
    phone: "",
    skills: [],
    description: "",
    topWorks: [null, null, null], // Store URLs of top works images
    socialMedia: [],
  });

   useEffect(() => {
    const signupData = JSON.parse(sessionStorage.getItem('signup'));
    const welcomeData = JSON.parse(localStorage.getItem('welcomeData')); // Assuming you store welcome data in localStorage
    if (signupData && welcomeData) {
      setUser({
        ...user,
        firstName: welcomeData.firstName,
        lastName: welcomeData.lastName,
        category: welcomeData.category,
        email: signupData.email,
      });
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleKeywordsChange = (e) => {
    const keywords = e.target.value.split(",").map((keyword) => keyword.trim());
    setUser({
      ...user,
      keywords,
    });
  };

  
  const handleTopWorkImageUpload = (e, index) => {
    // Handle image upload and store the URL in the topWorks array
    // You may want to use a file upload component or library for this
    // Update the topWorks state with the uploaded image URL at the specified index
  };
  const inputs = [
    {
      type: "text",
      name: "firstName",
      placeholder: "First Name",
      value: user.firstName,
    },
     {
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
      value: user.lastName,
    },
    {
      type: "number",
      name: "phone",
      placeholder: "Phone",
      value: user.phone,
    },
    {
      type: "text",
      name: "skills",
      placeholder: "Skills (comma-separated)",
      value: user.skills.join(', '),
    },
    
  ];

 

  return (
    <section className="user-form">
      <h1>User Profile</h1>
      <input
        type="file"
        name="profileImage"
        onChange={(e) => handleTopWorkImageUpload(e, 0)}
        />

      {/* Inputs Map */}
      {inputs.map(input =>
      <input
      type={input.type}
      name={input.name}
      placeholder={input.placeholder}
      value={input.value}
      onChange={handleInputChange}
      />
      )}
  
      <textarea
        name="description"
        placeholder="Description"
        value={user.description}
        onChange={handleInputChange}
        />
      <div>

        <h2>Top Works</h2>
        <input
          type="file"
          name="topWorkImage1"
          onChange={(e) => handleTopWorkImageUpload(e, 1)}
          />
        <input
          type="file"
          name="topWorkImage2"
          onChange={(e) => handleTopWorkImageUpload(e, 2)}
          />
        <input
          type="file"
          name="topWorkImage3"
          onChange={(e) => handleTopWorkImageUpload(e, 3)}
          />
      </div>
      
      <input
        type="text"
        name="socialMedia"
        placeholder="Social Media"
        value={user.socialMedia}
        onChange={handleInputChange}
        />

      <button type="button" className="btn btn-login"  onClick={() => {
          sessionStorage.setItem("userData", JSON.stringify(user));
          navigate("/");
        }}>
        DONE!
      </button>
    </section>
  );
}

export default NameForm;
