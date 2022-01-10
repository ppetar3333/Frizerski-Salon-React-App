import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import Nav from "./Nav";

function LogIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);

    const login = async (e) => {
        e.preventDefault();
        if(username === '' && password === '') {
            alert('Polja ne smeju biti prazna!')
        } else {
            if(localStorage.getItem("korisnik") === null) {
                const user = await axios.post(`http://localhost:5000/korisnici/${username}/${password}`, {
                    korisnickoIme: username,
                    lozinka: password,
                })
                if(user.data === '') {
                    alert('Greska pri unosu!');
                } else {
                    setData(user.data);
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
            <section className="log-in">
                <Nav />
                <form method="GET" action="login" className="log-in__wrapper">
                    <div className="log-in__form">
                        <label className="log-in__label">Username</label>
                        <input className="log-in__input" type="text" onChange={(e) => {setUsername(e.target.value)}} required/> <br />
                        <label className="log-in__label">Password</label>
                        <input className="log-in__input" type="password" onChange={(e) => {setPassword(e.target.value)}} required/> <br />
                        <button className="log-in__button log-in__button-primary log-in__button-ghost" onClick={login} type="submit">Log In</button>
                        <p className="log-in__registration">Do not have account?<Link className="log-in__registration-link" to={'/registracija'}> Registration</Link></p>
                    </div>
                </form>
            </section>
        )
    }
}

export default LogIn;