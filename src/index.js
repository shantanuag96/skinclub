import React from "react";
<<<<<<< HEAD
import ReactDOM from "react-dom/client";
import "./index.css";
=======
import { createRoot } from "react-dom/client";

>>>>>>> Incoming
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
import "./global.css";

>>>>>>> Incoming

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById("root"));
=======
const container = document.getElementById("root");
const root = createRoot(container);


>>>>>>> Incoming
root.render(
<<<<<<< HEAD
  <React.StrictMode>
=======
  <BrowserRouter>

>>>>>>> Incoming
    <App />
<<<<<<< HEAD
  </React.StrictMode>,
=======
  </BrowserRouter>,

>>>>>>> Incoming
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
