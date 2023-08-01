import React from 'react';
import Profile from './Profile';
import NewProfile from './NewProfile';
const Profiles = ({ users, onSelect, onAddUser }) => {
    console.log(typeof users)
    return ( 
        <>
            <div className="sidebar">
                <ul>
                    {
                        users.map((user, index) => {
                            return <Profile user={user} key={user.id} onSelect={onSelect} />
                        })
                    }
                </ul>
                
                    <NewProfile onAddUser={onAddUser} />
            </div>
        </>
    );
}
 
export default Profiles;