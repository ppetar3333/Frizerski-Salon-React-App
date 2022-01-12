import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../layout/Nav";

function IzmenaKorisnika() {

    const korisnikLS = localStorage.getItem('korisnikIzmena');
    const loggedInUser = JSON.parse(korisnikLS);
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [korisnickoIme, setKorisnickoIme] = useState('');
    const [lozinka, setLozinka] = useState('');
    const [brTelefona, setBrTelefona] = useState('');
    const [jmbg, setJmbg] = useState('');
    const [email, setEmail] = useState('');
    const [adresa, setAdresa] = useState('');

    const changeOne = (e) => {
        console.log("izmena");
    }

    return(
        <section className="change-user">
            <div className="change-user__nav">
                <Nav />
            </div>
            <form method="POST" action="#" className="forms__wrapper">
                <div className="forms__form">
                    <label className="forms__label">Ime</label>
                    <input className="forms__input" type="text" defaultValue={loggedInUser.ime} onChange={(e) => {setIme(e.target.value)}} required/>
                    <label className="forms__label">Prezime</label>
                    <input className="forms__input" type="text" defaultValue={loggedInUser.prezime} onChange={(e) => {setPrezime(e.target.value)}} required/>
                    <label className="forms__label">Korisnicko ime</label>
                    <input className="forms__input" type="text" defaultValue={loggedInUser.korisnickoIme} onChange={(e) => {setKorisnickoIme(e.target.value)}} required/>
                    <label className="forms__label">Lozinka</label>
                    <input className="forms__input" type="password" defaultValue={loggedInUser.lozinka} onChange={(e) => {setLozinka(e.target.value)}} required/>
                    <label className="forms__label">Broj telefona</label>
                    <input className="forms__input" type="number" defaultValue={loggedInUser.brojTelefona} onChange={(e) => {setBrTelefona(e.target.value)}} required/>
                    <label className="forms__label">Jmbg</label>
                    <input className="forms__input" type="number" defaultValue={loggedInUser.jmbg} onChange={(e) => {setJmbg(e.target.value)}} required/>
                    <label className="forms__label">Email</label>
                    <input className="forms__input" type="text" defaultValue={loggedInUser.email} onChange={(e) => {setEmail(e.target.value)}} required/>
                    <label className="forms__label">Adresa</label>
                    <input className="forms__input" type="text" defaultValue={loggedInUser.adresa} onChange={(e) => {setAdresa(e.target.value)}} required/>
                    <button className="forms__button" type="submit" onClick={() => changeOne()}>Change</button>
                    {
                        loggedInUser.tipKorisnika.includes('clan') ? <Link className="forms__button forms__button--cancel" to='/clan'>Cancel</Link> : null
                    }
                    {
                        loggedInUser.tipKorisnika.includes('admin') ? <Link className="forms__button forms__button--cancel" to='/admin'>Cancel</Link> : null
                    }
                    {
                        loggedInUser.tipKorisnika.includes('frizer') ? <Link className="forms__button forms__button--cancel" to='/frizer'>Cancel</Link> : null
                    }
                </div>
            </form>
        </section>
    )
}

export default IzmenaKorisnika;