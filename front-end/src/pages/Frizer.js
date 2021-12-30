import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function Frizer() {

    let navigate = useNavigate();
    const korisnikLS = localStorage.getItem('korisnik');
    const korisnik = JSON.parse(korisnikLS);

    const odjava = () => {
        localStorage.removeItem("korisnik");
        navigate('/');
    }

    return (
        <section>
            <div>
                <div>
                    <h1>Welcome, {korisnik.ime}</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to={'/svojiPodaci'}>Svoji Podaci</Link></li>
                        <li><Link to={'/termini'}>Pregled Termina</Link></li>
                        <li><button onClick={odjava}>Odjavi se</button></li>
                    </ul>
                </nav>
            </div>
        </section>  
    )
}

export default Frizer;