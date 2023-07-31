import React from 'react';

const Bill = () => {
    return ( 
        <>
            <div>
                <form action="" className="form-split-bill">
                    <h2>SPLIT A BILL WITH CLARK</h2>
                    <label htmlFor="">Bill value</label>
                    <input type="text" />
                    <label htmlFor=""> Your expense</label>
                    <input type="text" />
                    <label htmlFor="">Clark's expense</label>
                    <input type="text" />
                    <label htmlFor="">Who is paying the bill</label>
                    <select name="" id="">
                        <option value="">You</option>
                        <option value="">Clark</option>
                    </select>
                    <button className="button">Split bill</button>
                </form>
            </div>
        </>
    );
}
 
export default Bill;