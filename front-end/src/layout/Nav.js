import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function Nav(){

    let navigate = useNavigate();
    const korisnikLS = localStorage.getItem('korisnik');
    let tipKorisnika = '';

    if(korisnikLS !== null) {
        const parsed = JSON.parse(korisnikLS);
        tipKorisnika = parsed.tipKorisnika;
    }

    const odjava = () => {
        localStorage.removeItem("korisnik");
        navigate('/');
    }
    
    if(tipKorisnika === 'admin') {
        return(
            <nav>
                <ul>
                    <li> <Link to={'/svojiPodaci'}>Svoji Podaci</Link> </li>
                    <li> <Link to={'/salonPodaci'}>Frizerski Salon</Link> </li>
                    <li> <Link to={'/korisniciPodaci'}>Korisnici</Link> </li>
                    <li> <Link to={'/termini'}>Termini</Link> </li>
                    <li> <button onClick={odjava}>Odjavi se</button> </li>
                </ul>
            </nav>
        )
    } else if(tipKorisnika === 'clan'){
        return(
            <nav>
                <ul>
                    <li> <Link to='/svojiPodaci'>Svoji Podaci</Link> </li>
                    <li> <Link to='/pregledFrizera'>Pregled Frizera</Link> </li>
                    <li> <button onClick={odjava}>Odjavi se</button> </li>
                </ul>
            </nav>
        )
    } else if(tipKorisnika === 'frizer') {
        return(
            <nav>
                <ul>
                    <li><Link to={'/svojiPodaci'}>Svoji Podaci</Link></li>
                    <li><Link to={'/termini'}>Pregled Termina</Link></li>
                    <li><button onClick={odjava}>Odjavi se</button></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;