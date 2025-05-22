import toast, { Toaster } from 'react-hot-toast';
import React from "react"


const notify = () => toast.success('Here is your toast.');

const App = () => {

  
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
export default App;
