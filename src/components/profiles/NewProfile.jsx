import React from 'react';

const NewProfile = () => {
    return ( 
        <>  
            
       

            <form action="" className='form-add-friend'>
                <label htmlFor="">Friend name</label>
                <input type="text" />
                <label htmlFor="">Image url</label>
                <input type="text" value='https://i.pravatar.cc/48' />
                <button className="button">Add</button>
            </form>
            <button className="button">Add friend</button>

          
        </>
    );
}
 
export default NewProfile;