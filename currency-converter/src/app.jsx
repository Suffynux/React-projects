import { useState } from "preact/hooks";
import backgroundImgae from "/backgroundImage.jpg";


export function App() {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: "url('/backgroundImage.jpg')" }}
      >
        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          ></form>

          <div className="w-full mb-1">
            
          </div>
        </div>
      </div>
    </>
  );
}
