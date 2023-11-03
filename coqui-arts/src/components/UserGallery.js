import React, { useState, useEffect } from 'react';
import axios from 'axios';
import profile_icon from '../assets/tester.jpg';
import ListCategory from './ListCategory';
import '../css/userCarousel.css'

function UserGallery() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/user')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='gallery'>
        <div className='userNav'>
          <ListCategory></ListCategory>
        </div>
    <div id='users' className=' upc'>
    
    <ul className=' profile-down product-list-container'>
      {users.map(user => (
          <li  className='profile-down product-card' key={user.id}>
            <div className='gradiant'></div>
            <img src={profile_icon} alt=''></img>
            <h3 className='userName profile-title'>{[user.first_name, " ", user.last_name]}</h3>
            <div className='profile-description'>
                Lorem
            </div>
            <div className='profile-button'><a href={'mailto:' + user.email}>{user.email}</a></div>
            </li>
      ))}
    </ul>
    
    </div>
    </div>
  );
}
export default UserGallery;