import React from "react";
import {BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import Home from "./pages";
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
