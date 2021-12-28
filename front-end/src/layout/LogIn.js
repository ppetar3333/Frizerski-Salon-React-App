import React from "react";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

function LogIn() {

    const [korisnickoIme, setKorisnickoIme] = useState('');
    const [lozinka, setLozinka] = useState('');

    const login = async () => {
        axios.post(`http://localhost:5000/korisnici/${korisnickoIme}/${lozinka}`, {
            korisnickoIme: korisnickoIme,
            lozinka: lozinka,
        }).then((response) => {
            console.log(response);
        })
    }

    return (
        <>
            <section className="log-in">
                <div className="log-in__form">
                    <label className="log-in__username">Username</label>
                    <input className="log-in__username-i" type="text" onChange={(e) => {setKorisnickoIme(e.target.value)}} required/> <br />
                    <label className="log-in__password">Password</label>
                    <input className="log-in__password-i" type="password" onChange={(e) => {setLozinka(e.target.value)}} required/> <br />
                    <button className="log-in__button" onClick={login}>Log In</button>
                    <Link to={'/registracija'}>Registracija</Link>
                </div>
            </section>
        </>
    )
}

export default LogIn;