import React from "react";
import { useNavigate } from 'react-router-dom';

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
        <section className="clan container">
            <div className="clan__wrapper">
                <h1 className="clan__title">Clan</h1>
                <button className="clan__logout" onClick={odjava}>Odjavi se</button>
            </div>
        </section>
    )
}

export default Clan;