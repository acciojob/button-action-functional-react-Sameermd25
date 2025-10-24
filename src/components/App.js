import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [displayP,setDisplayP]=useState(false);
  return (
    <div id="main">
        <button id="click" className='border w-[150px] bg-gray-300 text-lg p-2' onClick={()=>setDisplayP(!displayP)}>
            click to{displayP?<span> hide</span>:<span> show</span>} p
        </button>
        {displayP ? <p id="para" className='text-green-600 font-bold text-3xl m-3'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:<p></p>}
        
    </div>
  );
}


export default App;
