import React from "react";
import FrizerskiSalonList from '../components/FrizerskiSalonList';
import Nav from "../layout/Nav";

function Home() {
    
    window.onbeforeunload = function() {
        localStorage.clear();
    }

    return(
        <header className="header">
            <div className="header__wrapper">
                <div className="header__nav">
                    <Nav />
                </div>
                <div className="header__info-wrapper">
                    <FrizerskiSalonList />
                </div>
            </div>
        </header>
    )
}

export default Home;