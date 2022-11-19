import './App.css';
import React, {useEffect, useState} from "react";

function App() {
    const [val, setVal] = useState('0');
    useEffect(()=>{
        adjustFontSize()
        }
    ,[val])

    const adjustFontSize = () => {

        if(window.innerWidth > 360) {
            const fontSize = 3.3 - val.length*0.05
            document.getElementById("kp").style.fontSize = fontSize + 'vw'
        }
        else{
            const fontSize = 9.3 - val.length*0.05
            document.getElementById("kp").style.fontSize = fontSize + 'vw'
        }
    }
    const handleInput =(e) => {

  let tempVal =  typeof val !== "number" ? val : val.toString();
        if(
            (tempVal.slice(-1) === '.' && tempVal.slice(-1) === e.target.value) ||
            (tempVal.slice(-1) === '+' && tempVal.slice(-1) === e.target.value) ||
            (tempVal.slice(-1) === '-' && tempVal.slice(-1) === e.target.value) ||
            (tempVal.slice(-1) === '*' && tempVal.slice(-1) === e.target.value) ||
            (tempVal.slice(-1) === '/' && tempVal.slice(-1) === e.target.value) ||
            (tempVal.slice(-1) === '*' &&  e.target.value === '+' ) ||
            (tempVal.slice(-1) === '*' &&  e.target.value === '-' ) ||
            (tempVal.slice(-1) === '*' &&  e.target.value === '/' ) ||
            (tempVal.slice(-1) === '-' &&  e.target.value === '*' ) ||
            (tempVal.slice(-1) === '-' &&  e.target.value === '/' ) ||
            (tempVal.slice(-1) === '+' &&  e.target.value === '/' ) ||
            (tempVal.slice(-1) === '/' &&  e.target.value === '-' ) ||
            (tempVal.slice(-1) === '/' &&  e.target.value === '+' ) ||
            (tempVal.slice(-1) === '/' &&  e.target.value === '*' )
        ){
            return
        }
        if(val === '0'){
            setVal( e.target.value)
        }
        else {
            setVal("" + val + e.target.value)
        }
    }
    const calculateResult = () => {
        console.log(eval(val))
        setVal(eval(val))
    }
  return (
      //calculator app
    <div className="App">
        <div className="main-container">
            <span style={{"font-size": "2rem",
                "letter-spacing": "2px"}}>CALCULATOR</span>
          <div className="card3">
              <div className="container-screen">
                  <h1 className="ex1" id="kp">{val}</h1></div>
              <div className="calculator-keys">

                  <button type="button" className="operator btn btn-secondary" value="+" onClick={handleInput}>+</button>
                  <button type="button" className="operator btn btn-secondary" value="-"onClick={handleInput}>-</button>
                  <button type="button" className="operator btn btn-secondary" value="*" onClick={handleInput}>&times;</button>
                  <button type="button" className="operator btn btn-secondary" value="/" onClick={handleInput}>&divide;</button>

                  <button type="button" value="7" className="btn btn-light waves-effect" onClick={handleInput}>7</button>
                  <button type="button" value="8" className="btn btn-light waves-effect" onClick={handleInput}>8</button>
                  <button type="button" value="9" className="btn btn-light waves-effect" onClick={handleInput}>9</button>


                  <button type="button" value="4" className="btn btn-light waves-effect" onClick={handleInput}>4</button>
                  <button type="button" value="5" className="btn btn-light waves-effect" onClick={handleInput}>5</button>
                  <button type="button" value="6" className="btn btn-light waves-effect" onClick={handleInput}>6</button>


                  <button type="button" value="1" className="btn btn-light waves-effect" onClick={handleInput}>1</button>
                  <button type="button" value="2" className="btn btn-light waves-effect" onClick={handleInput}>2</button>
                  <button type="button" value="3" className="btn btn-light waves-effect" onClick={handleInput}>3</button>


                  <button type="button" value="0" className="btn btn-light waves-effect" onClick={handleInput}>0</button>
                  <button type="button" className="decimal function btn btn-secondary" value="."onClick={handleInput}>.</button>
                  <button type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear" onClick={() =>setVal('0')}>AC
                  </button>

                  <button type="button" className="equal-sign operator btn btn-default" value="=" onClick={calculateResult}>=</button>

              </div>
          </div>
        </div>
    </div>
  );
}

export default App;
