import React from 'react';
import Profiles from './components/Profiles/Profiles';
import Bill from './components/Bill';
import './index.css'
const App = () => {
    return ( 
        <>
           <div className='app'>
                <Profiles />
                <Bill />
           </div>
        </>
    );
}
 
export default App;