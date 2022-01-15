import React from "react";
import Nav from "../layout/Nav";
import TypingEffect from 'react-typing-effect';


function Clan() {

    const userLS = localStorage.getItem('korisnik');
    const user = JSON.parse(userLS);
    
    return(
        <section className="frizer">
            <div className="frizer__nav">
                <Nav />
            </div>
            <div className="welcome__wrapper">
                <TypingEffect 
                    eraseDelay={1000} typingDelay={1000} eraseSpeed={50} speed={50} className="welcome__title" 
                    text={['Welcome, '] + user.ime + '!'}>
                </TypingEffect>
            </div>
        </section>
    )
}

export default Clan;