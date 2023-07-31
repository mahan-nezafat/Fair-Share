import React from 'react';
import Profile from './Profile';
import NewProfile from './NewProfile';
const Profiles = () => {
    return ( 
        <>
            <div className="sidebar">
                <ul>
                    <Profile />
                    <Profile />
                    <Profile />
                </ul>
                
                    <NewProfile />
            </div>
        </>
    );
}
 
export default Profiles;