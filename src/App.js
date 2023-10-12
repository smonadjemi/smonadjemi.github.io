import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Publications from './components/publications'
import CV from './components/cv'
import Teaching from './components/teaching'

function App() {

    const [isDark, setIsDark] = useState(true);

    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (isSystemDark) => setIsDark(isSystemDark)
    );


    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]);

    return (
        <div className="App">
            <NavBar isDark={isDark} setIsDark={setIsDark}></NavBar>
            <Home></Home>
            <About></About>
            <Publications></Publications>
            <Teaching></Teaching>
            <CV></CV>
        </div>
    );
}

export default App;
