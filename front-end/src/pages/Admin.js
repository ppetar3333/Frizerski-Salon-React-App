import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function Admin() {
    
    let navigate = useNavigate();
    const korisnikLS = localStorage.getItem('korisnik');
    const korisnik = JSON.parse(korisnikLS);

    const odjava = () => {
        localStorage.removeItem("korisnik");
        navigate('/');
    }

    // pregled za svojih podataka i izmena
    // sve moze da pregleda, izmeni, obrise
    // clanove moze da blokira i odblokira
    
    return (
        <section>
            <div>
                <div>
                    <h4>Welcome, {korisnik.ime}</h4>
                </div>
                <nav>
                    <ul>
                        <li> <Link to={'/svojiPodaci'}>Svoji Podaci</Link> </li>
                        <li> <Link to={'/salonPodaci'}>Frizerski Salon</Link> </li>
                        <li> <Link to={'/korisniciPodaci'}>Korisnici</Link> </li>
                        <li> <Link to={'/termini'}>Termini</Link> </li>
                    </ul>
                </nav>
                <button className="admin__logout" onClick={odjava}>Odjavi se</button>
            </div>
        </section>
    )
}

export default Admin;