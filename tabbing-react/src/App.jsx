import React, { useState } from "react";
import { tabData } from "./Data/Data.js";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="body ">
        <div>
          <h1 className="text-center m-1">Tabbing in React</h1>
          <div className="tabContainer bg-red-200 ">
            <ul className="flex gap-2 ml-8">
            {tabData.map((tabData,index)=>{
              return (
                <>
                <li>
                <button className="btn">{tabData.category}</button>
              </li>
              <p></p>
              </>
              
              )
            })}

            </ul>
            <p className="text-black p-6 ml-3 w-[1200px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem quod incidunt fuga! Id, hic sequi? Quis molestias dolorem itaque ipsam quibusdam qui, amet quam nemo esse accusamus, consequuntur praesentium!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
