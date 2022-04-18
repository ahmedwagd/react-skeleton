import React, { useState, useEffect } from 'react';
import SkeletonProfile from '../skeletons/SkeletonProfile';

const Users = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
      const data = await response.json()
      setProfile(data)
    }, 3000);
    // console.log(profile);
  }, [])

  return (
    <aside className='user'>
      <h2
      >
        Users
      </h2>
      {
        profile && (
          <div className="profile">
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
          </div>
        )
      }
      {!profile && <SkeletonProfile theme="dark" />}
    </aside>
  )
}

export default Users;