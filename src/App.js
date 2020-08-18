import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import About from './components/about'
import Publications from './components/publications'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <About></About>
      <Publications></Publications>
      
      
    </div>
  );
}

export default App;
