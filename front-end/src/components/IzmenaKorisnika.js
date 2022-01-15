import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from "../layout/Nav";
import axios from 'axios';
import moment from 'moment';

function IzmenaKorisnika() {

    let navigate = useNavigate();
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

    const checkChange = (data, notChanged) => {
        if(data !== '') {
            return data;
        } else {
            return notChanged;
        }
    }

    const changeOne = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/korisnici/${loggedInUser.id}`,{
            ime: checkChange(ime, loggedInUser.ime),
            prezime: checkChange(prezime, loggedInUser.prezime),
            korisnickoIme: checkChange(korisnickoIme, loggedInUser.korisnickoIme),
            lozinka: checkChange(lozinka, loggedInUser.lozinka),
            email: checkChange(email, loggedInUser.email),
            adresa: checkChange(adresa, loggedInUser.adresa),
            jmbg: checkChange(jmbg, loggedInUser.jmbg),
            brojTelefona: checkChange(brTelefona, loggedInUser.brojTelefona),
            updatedAt: moment().format('YYYY-MM-DD')
        })
        navigate('/' + loggedInUser.tipKorisnika);
        removeItem();
    }

    const removeItem = () => {
        localStorage.removeItem('korisnikIzmena');
    }
    
    return(
        <section className="change-user">
            <div className="change-user__nav">
                <Nav />
            </div>
            <form method="POST" action="izmenaKorisnika" onSubmit={changeOne} className="forms__wrapper">
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
                    <input className="forms__input" type="number" defaultValue={loggedInUser.jmbg} onChange={(e) => {setJmbg(e.target.value)}} readOnly/>
                    <label className="forms__label">Email</label>
                    <input className="forms__input" type="text" defaultValue={loggedInUser.email} onChange={(e) => {setEmail(e.target.value)}} required/>
                    <label className="forms__label">Adresa</label>
                    <input className="forms__input" type="text" defaultValue={loggedInUser.adresa} onChange={(e) => {setAdresa(e.target.value)}} required/>
                    <button className="forms__button" type="submit">Change</button>
                    {
                        loggedInUser.tipKorisnika.includes('clan') ? <Link className="forms__button forms__button--cancel" onClick={removeItem} to='/clan'>Cancel</Link> : null
                    }
                    {
                        loggedInUser.tipKorisnika.includes('admin') ? <Link className="forms__button forms__button--cancel" onClick={removeItem} to='/admin'>Cancel</Link> : null
                    }
                    {
                        loggedInUser.tipKorisnika.includes('frizer') ? <Link className="forms__button forms__button--cancel" to='/frizer' onClick={removeItem}>Cancel</Link> : null
                    }
                </div>
            </form>
        </section>
    )
}

export default IzmenaKorisnika;