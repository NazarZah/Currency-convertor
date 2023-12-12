import React from 'react';
import './InputStyle.css'


function CurrencyInput(props) {
    const {
        amount, // Fix typo here
        currency,
        currencies,
        onChangeAmount,
        onChangeCurrency,
    } = props;

    return (
        <div className='group'>
            <input
                type='number'
                value={amount} 
                onChange={(e) => onChangeAmount(e.target.value)}
            />
            <select
                value={currency}
                onChange={(e) => onChangeCurrency(e.target.value)}
            >
                {currencies.map((currency) => (
                    <option
                        value={currency}
                        key={currency}
                    >
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyInput;