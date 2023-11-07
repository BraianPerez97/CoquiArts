// This component is the user profile card

//Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserProfile({ match }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = match.params.id;

    axios
      .get(`http://localhost:5001/api/user/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [match.params.id]);

  return (
    <div>
      {user ? (
        <div>
          <h1>User Profile</h1>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user information here*/}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default UserProfile;
