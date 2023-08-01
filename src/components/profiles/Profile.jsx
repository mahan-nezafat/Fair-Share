import React from 'react';

const Profile = ({ user, onSelect }) => {
    return ( 
        <>
            <li>
                <img src={user.avatar} alt="avatar" />
                <h3>{user.name}</h3>
                {
                    user.bill < 0 ? 
                    <p className='red'>You owe {user.name} ${Math.abs(user.bill)}</p> : user.bill > 0 ?
                    <p className='green'>{user.name} owes you ${Math.abs(user.bill)}</p> :
                    <p>You and {user.name} are even</p>
                }
                <button className="button" onClick={() => onSelect(user.id)}>{user.show ? "Close" : "Select"}</button>
            </li>
        </>
    );
}
 
export default Profile;