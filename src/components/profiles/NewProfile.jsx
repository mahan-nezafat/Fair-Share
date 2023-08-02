import React, { useState } from 'react';

const NewProfile = ({ onAddUser }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState('');

    const [image, setImage] = useState('https://i.pravatar.cc/48');

    
    function handleSumbit(e) {
        e.preventDefault();
        if(!name || !image) return
        const newUser = {id: Date.now(), name, avatar: image + `?u=${Date.now()}`, bill: 0, show: false};
        onAddUser(newUser);
        setName('');
    }

    return ( 
        <>  
           {
            isOpen && 

            <form action="" className='form-add-friend' onSubmit={handleSumbit}>
                <label>Friend name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Image url</label>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                <button className="button">Add</button>
            </form>
           }

            <button onClick={() => setIsOpen(isOpen => !isOpen)} className="button">{
                isOpen ? "Close" : "Add friend"
            }</button>
          
        </>
    );
}
 
export default NewProfile;