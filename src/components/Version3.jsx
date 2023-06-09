import { useState } from 'react'
import Styles from './Styles.css'

export default function Version3() {
  const [result, setResult] = useState("");

  function handleClick(e) {
    setResult(result.concat(e.target.name));
  }
  function handleClear() {
    setResult("");
  }
  function handleBackSpace() {
    setResult(result.slice(0, -1));
  }
  function handleResult() {
    try {
      setResult(eval(result).toString());
    }
    catch (err) {
      setResult("Error");

    }
  }

  return (
    <div>

      <div className='info'>
        Complex Calculator
      </div>
      <div className='container'>
        <form>
          <input type='text' value={result}></input>
        </form>
      </div>
      <div className='buttonLinks'>
        <button className='calcButton' onClick={() => { window.location = '/' }}>Basic Calculator</button>
        <button className='calcButton' onClick={() => { window.location = '/ver2' }}>RPN Calculator</button>
        <button className='calcButton' onClick={() => { window.location = '/ver3' }}>Complex Calculator</button>
      </div>

      <div className='keypad'>
        <button onClick={handleClear} id="clear">Clear</button>
        <button onClick={handleBackSpace} id='backspace'>C</button>
        <button name='/' onClick={handleClick}>&divide;</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='*' onClick={handleClick}>&times;</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='-' onClick={handleClick}>&ndash;</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='+' onClick={handleClick}>+</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='.' onClick={handleClick}>.</button>
        <button onClick={handleResult} id="answer">=</button>
      </div>

    </div>
  )
}