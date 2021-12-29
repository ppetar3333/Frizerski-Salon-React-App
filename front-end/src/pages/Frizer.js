import React from "react";
import { useNavigate } from 'react-router-dom';

function Frizer() {

    let navigate = useNavigate();

    const odjava = () => {
        localStorage.removeItem("korisnik","frizer");
        navigate('/');
    }

    return (
        <>
            <h1>frizer</h1>
            <button onClick={odjava}>Odjavi se</button>
        </>
    )
}

export default Frizer;