import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

function clear() { 
  (document.getElementById('hex') as HTMLInputElement).value = ''; 
  (document.getElementById('decimal') as HTMLInputElement).value = ''; 
}

function hextodecimal() { 
    const decimal: number = parseInt((document.getElementById('hex') as HTMLInputElement).value, 16);   

    if(isNaN(decimal)) { 
        (document.getElementById('decimal') as HTMLInputElement).value = ''; 
        return; 
    }

    (document.getElementById('decimal') as HTMLInputElement).value = decimal.toString();
}

function decimaltohex() { 
    const hex: number = parseInt((document.getElementById('decimal') as HTMLInputElement).value); 

    if(isNaN(hex)) { 
        (document.getElementById('hex') as HTMLInputElement).value = ''; 
        return; 
    }

    (document.getElementById('hex') as HTMLInputElement).value = hex.toString(16); 
}


function renderClick(e: any ) { 
  console.log(e.target.id); 
  if ((document.getElementById('hexordecimal') as HTMLSelectElement).value === 'hex') {
    (document.getElementById('hex') as HTMLInputElement).value += (e.target.id); 
    hextodecimal();
  } else { 
    (document.getElementById('decimal') as HTMLInputElement).value += (e.target.id); 
    decimaltohex(); 
  }

}

function hexordecimal() { 
  if ((document.getElementById('hexordecimal') as HTMLInputElement).value === 'decimal') { 
    (document.getElementById('charSpan') as HTMLSpanElement).innerHTML= ''; 
    return;
  }

  ReactDOM.render( 
    <React.StrictMode> 
      <Chars />
    </React.StrictMode>, 
    document.getElementById('charSpan')
  )
}

class Chars extends React.Component { 
  render() { 
    return ( 
      <div className="charDiv"> 
        <button id="a" className="charButton" onClick={renderClick}>a</button>
        <button id="b" className="charButton" onClick={renderClick}>b</button>
        <button id="c" className="charButton" onClick={renderClick}>c</button>
        <button id="d" className="charButton" onClick={renderClick}>d</button>
        <button id="e" className="charButton" onClick={renderClick}>e</button>
        <button id="f" className="charButton" onClick={renderClick}>f</button>
      </div>
    ); 
  }
}

class Main extends React.Component { 
    hex: HTMLElement | null = document.getElementById('hex'); 
    render() {  
    return( 
      <div className="divBackground"> 
        <h1>Hex Converter</h1>
        <input 
        id="decimal"
        className="input" 
        placeholder="decimal input" 
        onChange={decimaltohex}
        />

        <input 
        id="hex" 
        className="input" 
        placeholder="hex input" 
        onChange={hextodecimal}
        /> 

        <div className='numberDiv'>
          <select id="hexordecimal" onChange={hexordecimal}> 
            <option value="decimal">decimal</option>
            <option value="hex">hex</option>
          </select>
          <div className='numbersdiv' id="numbersDiv">
            <span id="charSpan"/>
            <button id="9" className="numberButton" onClick={renderClick}>9</button>
            <button id="8" className="numberButton" onClick={renderClick}>8</button>
            <button id="7" className="numberButton" onClick={renderClick}>7</button> 
            <button id="6" className="numberButton" onClick={renderClick}>6</button>
            <button id="5" className="numberButton" onClick={renderClick}>5</button>
            <button id="4" className="numberButton" onClick={renderClick}>4</button>
            <button id="3" className="numberButton" onClick={renderClick}>3</button>
            <button id="2" className="numberButton" onClick={renderClick}>2</button>
            <button id="1" className="numberButton" onClick={renderClick}>1</button>
            <button id="0" className="fullWidth" onClick={renderClick}>0</button>
            <button className="allclear" onClick={clear}>ac</button>
            </div>
        </div>
      </div>
    ); 
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
