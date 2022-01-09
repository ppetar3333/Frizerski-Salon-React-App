import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SvojiPodaci() {

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

    const izmeni = (e) => {
        console.log("izmena");
    }

    return(
        <form method="POST" action="#">
            <label>Ime</label>
            <input type="text" defaultValue={loggedInUser.ime} onChange={(e) => {setIme(e.target.value)}} required/>
            <label>Prezime</label>
            <input type="text" defaultValue={loggedInUser.prezime} onChange={(e) => {setPrezime(e.target.value)}} required/>
            <label>Korisnicko ime</label>
            <input type="text" defaultValue={loggedInUser.korisnickoIme} onChange={(e) => {setKorisnickoIme(e.target.value)}} required/>
            <label>Lozinka</label>
            <input type="password" defaultValue={loggedInUser.lozinka} onChange={(e) => {setLozinka(e.target.value)}} required/>
            <label>Broj telefona</label>
            <input type="number" defaultValue={loggedInUser.brojTelefona} onChange={(e) => {setBrTelefona(e.target.value)}} required/>
            <label>JMBG</label>
            <input type="number" defaultValue={loggedInUser.jmbg} onChange={(e) => {setJmbg(e.target.value)}} required/>
            <label>Email</label>
            <input type="text" defaultValue={loggedInUser.email} onChange={(e) => {setEmail(e.target.value)}} required/>
            <label>Adresa</label>
            <input type="text" defaultValue={loggedInUser.adresa} onChange={(e) => {setAdresa(e.target.value)}} required/>
            <button type="submit" onClick={izmeni}>Izmeni</button>
            {
                loggedInUser.tipKorisnika.includes('clan') ? <Link to='/clan'>Cancel</Link> : null
            }
            {
                loggedInUser.tipKorisnika.includes('admin') ? <Link to='/admin'>Cancel</Link> : null
            }
            {
                loggedInUser.tipKorisnika.includes('frizer') ? <Link to='/frizer'>Cancel</Link> : null
            }
        </form>
    )
}

export default SvojiPodaci;