import { useState } from 'react'
import Styles from './Styles.css'


export default function Version3() {
    const [stack, setStack] = useState([]);

    function handleNumberInput(number) {
        setStack([...stack, number]);
    }

    function handleOperatorInput(operator) {
        let newStack = [...stack];
        if (newStack.length >= 2) {
            let operand2 = newStack.pop();
            let operand1 = newStack.pop();
            let result;
            switch (operator) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                case '^':
                    result = Math.pow(operand1, operand2);
                    break;
                default:
                    return;
            }
            setStack([...newStack, result]);
        }
    }

    function handleEnter() {
        let newStack = [...stack];
        if (newStack.length >= 1) {
            let result = newStack.pop();
            setStack([...newStack, result]);
        }
    }

    function handleClear() {
        setStack([]);
    }

    function handleAllClear() {
        setStack([]);
    }


    return (
        <div>
            <div className='buttonLinks'>
                <button className='calcButton' onClick={() => { window.location = '/' }}>Basic Calculator</button>
                <button className='calcButton' onClick={() => { window.location = '/ver2' }}>RPN Calculator</button>
                <button className='calcButton' onClick={() => { window.location = '/ver3' }}>Complex Calculator</button>
            </div>
            <div className='container'>
                <form>
                    <input type='text' value={stack.join(' ')}></input>
                </form>
            </div>

            <div className='keypad'>
                <button onClick={() => handleClear()} id='backspace'>C</button>
                <button onClick={() => handleAllClear() } id="clear">Clear</button>
                <button onClick={() => handleOperatorInput('/')}>&divide;</button>
                <button onClick={() => handleNumberInput(7)}>7</button>
                <button onClick={() => handleNumberInput(8)}>8</button>
                <button onClick={() => handleNumberInput(9)}>9</button>
                <button onClick={() => handleOperatorInput('*')}>&times;</button>
                <button onClick={() => handleNumberInput(4)}>4</button>
                <button onClick={() => handleNumberInput(5)}>5</button>
                <button onClick={() => handleNumberInput(6)}>6</button>
                <button onClick={() => handleOperatorInput('-')}>&ndash;</button>
                <button onClick={() => handleNumberInput(1)}>1</button>
                <button onClick={() => handleNumberInput(2)}>2</button>
                <button onClick={() => handleNumberInput(3)}>3</button>
                <button onClick={() => handleOperatorInput('+')}>+</button>
                <button onClick={() => handleNumberInput(0)}>0</button>
                <button onClick={() => handleOperatorInput('^')}>^</button>
                <button onClick={() => handleEnter()} id="answer">=</button>
            </div>

        </div>
    )
}