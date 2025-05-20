import React, { useState } from 'react';
import './App.css';

function App() {

  let [pass, setPass] = useState(false)
  return (
    <>
      <div className="flex justify-center">
        <div className="text-center ">
      
          <input type={pass ? 'text' : 'password'}  className='bg-red-200 m-1 p-2 rounded-lg'/>
          <button className="bg-red-300 p-1 rounded-lg" onClick={()=>setPass(!pass)}>
            {pass ? "Hide" : "Show Password"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
