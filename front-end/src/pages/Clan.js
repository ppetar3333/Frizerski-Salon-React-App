import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function Clan() {

    let navigate = useNavigate();

    const odjava = () => {
        localStorage.removeItem("korisnik");
        navigate('/');
    }
    
    // pregled za svojih podataka i izmena
    // pretraga frizera i sortiranje
    // pregled svih frizera
    // zakazivanje termina kod odbranog frizer

    return(
        <section>
            <div>
                <div>
                    <h1>Clan</h1>
                </div>
                <nav>
                    <ul>
                        <li> <Link to='/svojiPodaci'>Svoji Podaci</Link> </li>
                        <li> <Link to='/pregledFrizera'>Pregled Frizera</Link> </li>
                        <li> <button onClick={odjava}>Odjavi se</button> </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}

export default Clan;