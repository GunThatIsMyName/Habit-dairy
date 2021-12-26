import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProvider from "./context/AppContext";
import UserProvider from "./context/UserContext";
import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
