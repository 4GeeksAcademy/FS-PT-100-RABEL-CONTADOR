import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from "./components/Home.jsx";

let seconds = 0;

const renderApp = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <Home seconds={seconds} />
    </React.StrictMode>
  );
};

setInterval(() => {
  seconds += 1;
  renderApp();
}, 1000);

// Render inicial
renderApp();
