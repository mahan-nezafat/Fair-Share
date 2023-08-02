import React, { useState } from 'react';
import Profiles from './components/Profiles/Profiles';
import Bill from './components/Bill';
import './index.css'
const App = () => {

    const [users, setUsers] = useState([
        {
            id: 1001,
            name: "Clark",
            avatar: "https://i.pravatar.cc/48?u=1001",
            bill: 10,
            show: false
        },
        {
            id: 100,
            name: "Emily",
            avatar: "https://i.pravatar.cc/48?u=100",
            bill: -7,
            show: false
        },
        {
            id: 1003,
            name: "Kevin",
            avatar: "https://i.pravatar.cc/48?u=1003",
            bill: 0,
            show: false
        },
    ]);
    
    return ( 
        <>
           <div className='app'>
                <Profiles users={users} onSelect={handleSelect} onAddUser={handleAddUser}/>
                <Bill onAddBill={handleBill} users={users} onChangeBill={handleBill} />
           </div>
        </>
    );


    function handleSelect(id) {
        const updateUser = users.filter(user => user.id === id)[0];

        if(!updateUser.show) {
            updateUser.show = true;
        }else { 
            updateUser.show = false;
        }
        const newUsers = users.filter(user => user.id !== id);
        newUsers.map(user => {
            return user.show = false; 
        });

        setUsers([{...updateUser}, ...newUsers]);
    }

    function handleAddUser(newUser) {
        setUsers([newUser, ...users]);
    }

    function handleBill(billData) {
        console.log(billData);
        let billedUser = users.find(user => user.id === billData.id);
        const newUsers = users.filter(user => user.id !== billData.id);
        
        if(billData.payingPerson === 'you') {
            const newBill = billedUser.bill + billData.friendExpense;        
            setUsers([{...billedUser, bill: newBill}, ...newUsers]);
        }

        if(billData.payingPerson === billedUser.name) {
            const newBill = billedUser.bill - Number(billData.yourExpense)
            setUsers([{...billedUser, bill: newBill}, ...newUsers]);
            
        }
    }


}
 
export default App;