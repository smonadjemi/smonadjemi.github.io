import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar'
import Home from './pages/Home';
import PublicationsPage from './pages/Publications_Page';
import TeachingPage from './pages/Teaching_Page';
import CV from './pages/CV';

function App() {

    const [isDark, setIsDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
    const [currentPage, setCurrentPage] = useState('home')


    const systemIsDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (isSystemDark) => {
            console.log('is system dark', isSystemDark)
            setIsDark(isSystemDark)
            console.log(isSystemDark)
        }
    );

    useEffect(() => {
        if (isDark) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDark]);

    var content = <Home />
    if (currentPage == 'publications')
    {
        content = <PublicationsPage />
    }
    else if (currentPage == 'teaching')
    {
        content = <TeachingPage />
    }
    else if (currentPage == 'cv')
    {
        content = <CV />
    }

    return (
        <>
            <NavBar
                isDark={isDark}
                setIsDark={setIsDark}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />

            {content}
        </>

    );
}

export default App;
