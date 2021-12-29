import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import Frizer from "../pages/Frizer";
import Clan from "../pages/Clan";
import Admin from "../pages/Admin";

function LogIn() {

    const [korisnickoIme, setKorisnickoIme] = useState('');
    const [lozinka, setLozinka] = useState('');
    const [data, setData] = useState([]);

    
    const login = async () => {
        if(localStorage.getItem("korisnik") === null) {
            const korisnik = await axios.post(`http://localhost:5000/korisnici/${korisnickoIme}/${lozinka}`, {
                korisnickoIme: korisnickoIme,
                lozinka: lozinka,
            })
            setData(korisnik.data);
        } else {
            alert("Vec ste ulogovani, morate se odjaviti.");
        }
    }

    if(data.tipKorisnika === 'frizer') {
        localStorage.setItem("korisnik","frizer");
        return <Frizer />
    } else if(data.tipKorisnika === 'admin') {
        localStorage.setItem("korisnik","admin");
        return <Admin />
    } else if(data.tipKorisnika === 'clan'){
        localStorage.setItem("korisnik","clan");
        return <Clan />
    } else {
        return (
            <>
                <section className="log-in">
                    <div className="log-in__form">
                        <label className="log-in__username">Username</label>
                        <input className="log-in__username-i" type="text" onChange={(e) => {setKorisnickoIme(e.target.value)}} required/> <br />
                        <label className="log-in__password">Password</label>
                        <input className="log-in__password-i" type="password" onChange={(e) => {setLozinka(e.target.value)}} required/> <br />
                        <button className="log-in__button" onClick={login}>Log In</button>
                        <p>Do not have account?</p><Link to={'/registracija'}>Registracija</Link>
                    </div>
                </section>
            </>
        )
    }
}

export default LogIn;