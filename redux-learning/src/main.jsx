import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use "react-dom/client" for React 18+
import { Provider } from "react-redux"; 
import { store } from "./App/store"; 
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
