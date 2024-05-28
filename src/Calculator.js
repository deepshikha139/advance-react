import './App.css';
import React, {useState} from 'react';

const Calculator = () => {
    const [userInput, setUserInput] = useState('');

    const digits = ['1','2','3','4','5','6','7','8','9','0','+', '-','*','=','c']

    const onClickDigit = (e) => {
        const id = e.target.id
        switch(id) {
            case 'c':
                setUserInput('');
                break;
            case '=':
                getResult();
                break;
            default: setUserInput(userInput + id);
        }
        
    }

    const getResult = () => {
        setUserInput(eval(userInput));
    }

  return (
    <div className="calculator">
        <form>
            <input
                type='text'
                value={userInput}
            />
        </form>
        <div onClick={onClickDigit} className='digital-container'>
            {digits.map((item, index) => <button id={item} key={index} className='calculator-button'>{item}</button>)}
        </div>
    </div>
  );
}

export default Calculator;
