import React from "react";
import { useNavigate } from 'react-router-dom';

function Clan() {

    let navigate = useNavigate();

    const odjava = () => {
        localStorage.removeItem("korisnik","clan");
        navigate('/');
    }
    
    return(
        <>
            <h1>clan</h1>
            <button onClick={odjava}>Odjavi se</button>
        </>
    )
}

export default Clan;