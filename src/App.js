import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import About from './components/about'
import Publications from './components/publications'
import CV from './components/cv'
import Teaching from './components/teaching'

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <About id='about'></About>
            <Publications></Publications>
            <Teaching></Teaching>
            <CV></CV>

        </div>
    );
}

export default App;
