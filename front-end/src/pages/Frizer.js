import React from "react";
import { useNavigate } from 'react-router-dom';

function Frizer() {

    let navigate = useNavigate();

    const odjava = () => {
        localStorage.removeItem("korisnik");
        navigate('/');
    }

    // pregled svojih podataka i izmena
    // pregled svojih termina i moze da prihvati ili odbije

    return (
        <>
            <h1>Frizer</h1>
            <button onClick={odjava}>Odjavi se</button>
        </>
    )
}

export default Frizer;