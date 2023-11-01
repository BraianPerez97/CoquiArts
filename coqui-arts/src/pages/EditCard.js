

import React, { useState } from 'react';
import Bake from '../assets/categories/bake.png'

const EditProfileView = () => {
  const profile = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Software engineer and cat lover',
    avatar: 'https://example.com/jane-doe-avatar.png',
  }
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);
  const [avatar, setAvatar] = useState(profile.avatar);

  const handleSubmit = () => {

  }

  return (
    <form className='container'>
      <h1>Hi!</h1>

    </form>
  );
};

export default EditProfileView;