import React, { useState } from 'react';

const Bill = ({ onChangeBill, users }) => {

    const showUser = users.filter(user => user.show );
    
    const [bill, setBill] = useState(0);
    const [yourExpense, setYourExpense] = useState(0);
    const [payingPerson, setPayingPerson] = useState('you');

    let friendExpense = bill ? bill - yourExpense : "";

    function handleSumbit(e) {
        e.preventDefault();

        if(!bill || !yourExpense) return

        const billData = {id: showUser[0].id, bill, yourExpense, friendExpense, payingPerson};

        onChangeBill(billData);

        setBill(0);

        setYourExpense(0);

        setPayingPerson('you');

    }

    return ( 
        <>
            {
               showUser[0] &&

                <div>
                    <form className="form-split-bill" onSubmit={handleSumbit}>
                        <h2>SPLIT A BILL WITH {showUser[0].name}</h2>
                        <label >Bill value</label>
                        <input type="number" value={bill} onChange={(e) => setBill(e.target.value)}/>
                        <label > Your expense</label>
                        <input type="number" value={yourExpense} onChange={(e) =>  setYourExpense(Number(e.target.value) >= bill ? yourExpense : Number(e.target.value))} />
                        <label >{showUser[0].name}'s expense</label>
                        <input type="number" value={friendExpense} readOnly disabled/>
                        <label >Who is paying the bill</label>
                        <select value={payingPerson}  onChange={(e) => setPayingPerson(e.target.value)}>
                            <option value="you">You</option>
                            <option value={showUser[0].name}>{showUser[0].name}</option>
                        </select>
                        <button className="button">Split bill</button>
                    </form>
                </div>

               
            }
            <div></div>
        </>
    );
}
 
export default Bill;