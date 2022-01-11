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
            <form method="POST" action="#" className="forms__wrapper">
                <div className="forms__form">
                    <label className="forms__label">Ime</label>
                    <input className="forms__input" type="text" onChange={(e) => {setIme(e.target.value)}} required/> <br />
                    <label className="forms__label">Prezime</label>
                    <input className="forms__input" type="text" onChange={(e) => {setPrezime(e.target.value)}} required/> <br />
                    <label className="forms__label">Korisnicko ime</label>
                    <input className="forms__input" type="text" onChange={(e) => {setKorisnickoIme(e.target.value)}} required/> <br />
                    <label className="forms__label">Lozinka</label>
                    <input className="forms__input" type="password" onChange={(e) => {setLozinka(e.target.value)}} required/> <br />
                    <label className="forms__label">Broj telefona</label>
                    <input className="forms__input" type="number" onChange={(e) => {setBrTelefona(e.target.value)}} required/> <br />
                    <label className="forms__label">Jmbg</label>
                    <input className="forms__input" type="number" onChange={(e) => {setJmbg(e.target.value)}} required/> <br />
                    <label className="forms__label">Email</label>
                    <input className="forms__input" type="text" onChange={(e) => {setEmail(e.target.value)}} required/> <br />
                    <label className="forms__label">Adresa</label>
                    <input className="forms__input" type="text" onChange={(e) => {setAdresa(e.target.value)}} required/> <br />
                    <button className="forms__button" type="submit" onClick={register}>Register</button>
                </div>
            </form>
        </section>
    )
}

export default Registracija;