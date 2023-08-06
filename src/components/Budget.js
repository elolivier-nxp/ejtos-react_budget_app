import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency, dispatch, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBuget = (value) => {
        if (value > 20000) {
            alert(`The budget value cannot exceed ${currency}20000`)
        } else if (value < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending')
        } 
        else {
            dispatch({type: 'SET_BUDGET', payload:value})
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input
                    required='required'
                    type='number'
                    step='10'
                    id='cost'
                    value={budget}
                    style={{ marginLeft: '0.5rem', size: 10}}
                    onChange={(event) => handleBuget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;