import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

function LogIn() {

    const [korisnickoIme, setKorisnickoIme] = useState('');
    const [lozinka, setLozinka] = useState('');
    const [data, setData] = useState([]);

    const login = async (e) => {
        e.preventDefault();
        if(korisnickoIme === '' && lozinka === '') {
            alert('Polja ne smeju biti prazna!')
        } else {
            if(localStorage.getItem("korisnik") === null) {
                const korisnik = await axios.post(`http://localhost:5000/korisnici/${korisnickoIme}/${lozinka}`, {
                    korisnickoIme: korisnickoIme,
                    lozinka: lozinka,
                })
                if(korisnik.data === '') {
                    alert('Greska pri unosu!');
                } else {
                    setData(korisnik.data);
                }
            } else {
                alert("Vec ste ulogovani, morate se odjaviti.");
            }
        }
    }

    if(data.tipKorisnika === 'frizer') {
        localStorage.setItem("korisnik", JSON.stringify(data));
        return <Navigate to='/frizer' />
    } else if(data.tipKorisnika === 'admin') {
        localStorage.setItem("korisnik", JSON.stringify(data));
        return <Navigate to='/admin'/>
    } else if(data.tipKorisnika === 'clan'){
        localStorage.setItem("korisnik", JSON.stringify(data));
        return <Navigate to='/clan' />
    } else {
        return (
            <form method="GET" action="login" className="log-in">
                <div className="log-in__form">
                    <label className="log-in__username">Username</label>
                    <input className="log-in__input" type="text" onChange={(e) => {setKorisnickoIme(e.target.value)}} required/> <br />
                    <label className="log-in__password">Password</label>
                    <input className="log-in__input" type="password" onChange={(e) => {setLozinka(e.target.value)}} required/> <br />
                    <button className="log-in__button" onClick={login} type="submit">Log In</button>
                    <p>Do not have account?<Link to={'/registracija'}> Registracija</Link></p>
                </div>
            </form>
        )
    }
}

export default LogIn;