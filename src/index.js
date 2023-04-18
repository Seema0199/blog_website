import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextprovider from "./context/AppContext"


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextprovider>
    <App />
  </AppContextprovider>
);
