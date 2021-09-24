import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

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

class Main extends React.Component { 
    hex: HTMLElement | null = document.getElementById('hex'); 
    render() {  
    return( 
      <div id="divBackground"> 
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
