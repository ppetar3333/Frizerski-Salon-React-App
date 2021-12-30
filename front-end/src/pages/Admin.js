import React from "react";
import { useNavigate } from 'react-router-dom';

function Admin() {
    
    let navigate = useNavigate();

    const odjava = () => {
        localStorage.removeItem("korisnik");
        navigate('/');
    }

    // pregled za svojih podataka i izmena
    // sve moze da pregleda, izmeni, obrise
    // clanove moze da blokira i odblokira
    
    return (
        <section className="admin container">
            <div className="admin__wrapper">
                <h1 className="admin__title">Admin</h1>
                <button className="admin__logout" onClick={odjava}>Odjavi se</button>
            </div>
        </section>
    )
}

export default Admin;