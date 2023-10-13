import React from 'react';
import '../components/components.css'
import Profile from '../components/profile';
import About from '../components/about';
import Publications from '../components/publications';


function Home() {
    return (
        <>
            <Profile />
            <About />
            <Publications selected_only={true} />
        </>
    )
}

export default Home;