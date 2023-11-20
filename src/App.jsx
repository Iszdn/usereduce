import { useRef } from 'react';
import './App.css';
import Test from './test';





function App() {
const inp =useRef()
const btn =useRef()

function showValue() {
  console.log(inp.current.value);
  console.log(btn.current.textContent);
}

  return (
    
    <>
  <input type="text"  ref={inp}/>
   <button ref={btn} onClick={showValue}>show</button>
   <Test></Test>
    </>
  );
}

export default App;
