import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Frizer() {

    const [name, setName] = useState('');
    let navigate = useNavigate();

    const odjava = () => {
        localStorage.removeItem("korisnik");
        navigate('/');
    }

    const getName = () => {
        const localStorageUser = localStorage.getItem('korisnik');
        const parseLocalStorage = JSON.parse(localStorageUser);
        if(localStorageUser === null) {
            setName('Greska!');
        } else {
            setName(parseLocalStorage);
        }
    }

    return (
        <>
            <h1>Frizer</h1>
            <button onClick={odjava}>Odjavi se</button>
            <div>
                <button onClick={getName}>Get name</button>
                <p>Name: {name.ime}</p>
            </div>
        </>
    )
}

export default Frizer;