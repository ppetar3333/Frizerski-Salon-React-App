import React from "react";
import { useState } from 'react';
import Nav from "./Nav";

function Registracija() {

    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [korisnickoIme, setKorisnickoIme] = useState('');
    const [lozinka, setLozinka] = useState('');
    const [brTelefona, setBrTelefona] = useState('');
    const [jmbg, setJmbg] = useState('');
    const [email, setEmail] = useState('');
    const [adresa, setAdresa] = useState('');

    const register = () => {
        console.log('registracija todo')
    }

    return (
        <section className="registration">
            <Nav />
            <form method="POST" action="#" className="registration__wrapper">
                <label>Ime</label>
                <input type="text" onChange={(e) => {setIme(e.target.value)}} required/>
                <label>Prezime</label>
                <input type="text" onChange={(e) => {setPrezime(e.target.value)}} required/>
                <label>Korisnicko ime</label>
                <input type="text" onChange={(e) => {setKorisnickoIme(e.target.value)}} required/>
                <label>Lozinka</label>
                <input type="password" onChange={(e) => {setLozinka(e.target.value)}} required/>
                <label>Broj telefona</label>
                <input type="number" onChange={(e) => {setBrTelefona(e.target.value)}} required/>
                <label>JMBG</label>
                <input type="number" onChange={(e) => {setJmbg(e.target.value)}} required/>
                <label>Email</label>
                <input type="text" onChange={(e) => {setEmail(e.target.value)}} required/>
                <label>Adresa</label>
                <input type="text" onChange={(e) => {setAdresa(e.target.value)}} required/>
                <button type="submit" onClick={register}>Register</button>
            </form>
        </section>
    )
}

export default Registracija;