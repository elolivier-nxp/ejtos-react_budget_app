import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (val)=> {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
    

  return (
        // <div className='alert' style={{ background: '#B3FFAE'}}> Currency ({currency}) {
            <select name="Location" id="Location" onChange={event=>changeCurrency(event.target.value)} style={{ background: '#B3FFAE', color: 'white', fontSize: '2em', border: 0}}>
                <option value="£">Currency (£ Pound)</option>
                <option value="₹">Currency (₹ Ruppee)</option>
                <option value="€">Currency (€ Euro)</option>
                <option value="$">Currency ($ Dollar)</option>
            </select>	
        // }	
        // </div>
    );
};

export default CurrencySelector;