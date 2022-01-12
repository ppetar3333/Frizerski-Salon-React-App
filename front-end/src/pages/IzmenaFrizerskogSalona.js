import React from "react";
import { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import Nav from "../layout/Nav";

function IzmeniFrizerskiSalon () {
    
    const salonLS = localStorage.getItem('frizerskiSalon');
    const salon = JSON.parse(salonLS);
    const [naziv, setNaziv] = useState('');
    const [adresa, setAdresa] = useState('');
    
    const izmeni = () => {
        console.log('izmeni');
        localStorage.removeItem('frizerskiSalon');
        <Navigate to='/admin' />
    }

    const cancel = () => {
        localStorage.removeItem('frizerskiSalon');
    }

    return(
        <section className="change-salon">
            <div className="change-salon__nav">
                <Nav />
            </div>
            <form action="#" method="POST" className="forms__wrapper">
                <div className="forms__form">
                    <label className="forms__label">ID</label>
                    <input className="forms__input" type="text" defaultValue={salon.id} readOnly />
                    <label className="forms__label">Naziv</label>
                    <input className="forms__input" type="text" defaultValue={salon.naziv} onChange={(e) => {setNaziv(e.target.value)}} required/>
                    <label className="forms__label">Adresa</label>
                    <input className="forms__input" type="text" defaultValue={salon.adresa} onChange={(e) => {setAdresa(e.target.value)}} required/>
                    <button className="forms__button" type="submit" onClick={() => izmeni()}>Izmeni</button>
                    <Link className="forms__button forms__button--cancel" to={'/admin'} onClick={() => cancel()}>Cancel</Link>
                </div>
            </form>
        </section>
    )
}

export default IzmeniFrizerskiSalon