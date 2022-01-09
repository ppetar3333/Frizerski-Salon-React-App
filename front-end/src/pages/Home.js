import React from "react";
import { Link } from 'react-router-dom';
import TypingEffect from 'react-typing-effect';
import FrizerskiSalonList from '../components/FrizerskiSalonList';

function Home() {
    return(
        <header className="header container">
            <div className="header__wrapper">
                <TypingEffect 
                    eraseDelay={1000} typingDelay={1000} eraseSpeed={50} speed={50} className="header__title" 
                    text={['Welcome to our website']}>
                </TypingEffect>
                <FrizerskiSalonList />
                <Link to="/login" className="header__login">LogIn</Link>
                <p className="header__register">Do not have account? <Link to="/registracija">Registracija</Link></p>
            </div>
        </header>
    )
}

export default Home;