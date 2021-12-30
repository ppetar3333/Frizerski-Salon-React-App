import React from "react";
import Nav from "../layout/Nav";

function Clan() {

    const korisnikLS = localStorage.getItem('korisnik');
    const korisnik = JSON.parse(korisnikLS);
    
    return(
        <section>
            <Nav />
            <div>
                <div>
                    <h2>Welcome, {korisnik.ime}</h2>
                </div>
            </div>
        </section>
    )
}

export default Clan;