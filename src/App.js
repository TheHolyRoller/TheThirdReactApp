import './App.css';
import React, { Component } from 'react';
import Home from "./pages/Home";
import Pages from "./pages/Pages";


//PA Token
//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


//This is the main driver of the programme and will be used to call Pages
function App() {
  return (
    <div className="App">
    <nav> </nav>
    <h1> Welcome </h1>
    <Home />
    <Pages />


    </div>
  );
}

export default App;
