import './App.css';
import CurrencyInput from './components/CurrencyInput/CurrencyInput';
import { useEffect, useState, useCallback } from 'react'; // Added useCallback
import axios from 'axios';

function App() {
  const [amout1, setAmout1] = useState(1);
  const [amout2, setAmout2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('UAH');
  const [rates, setRates] = useState([]);

  const handleAmount1Change = useCallback((amout1) => {
    setAmout2(format(amout1 * rates[currency2] / rates[currency1]));
    setAmout1(amout1);
  }, [currency1, currency2, rates]);

  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=90db381a44ff7078f69c4a829c2d5baf')
      .then(response => {
        setRates(response.data.rates);
      });
  }, []);

  useEffect(() => {
    if (!!rates) {
      handleAmount1Change(amout1);
    }
  }, [amout1, handleAmount1Change, rates]);

  const handleCurrency1Change = (currency1) => {
    setAmout2(format(amout1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  };

  const handleAmount2Change = (amout2) => {
    setAmout1(format(amout2 * rates[currency1] / rates[currency2]));
    setAmout2(amout2);
  };

  const handleCurrency2Change = (currency2) => {
    setAmout1(format(amout2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  };

  const format = (number) => {
    return number.toFixed(2);
  };

  return (
    <div className="app">
      <h1>Currency Converter</h1>
      <p className='value-string'>{amout1} {currency1} is equivalent to {amout2} {currency2}</p>
      <CurrencyInput
        onChangeAmount={handleAmount1Change}
        onChangeCurrency={handleCurrency1Change}
        currencies={Object.keys(rates)}
        amount={amout1}
        currency={currency1}
      />
      <CurrencyInput
        onChangeAmount={handleAmount2Change}
        onChangeCurrency={handleCurrency2Change}
        currencies={Object.keys(rates)}
        amount={amout2}
        currency={currency2}
      />
    </div>
  );
}

export default App;
