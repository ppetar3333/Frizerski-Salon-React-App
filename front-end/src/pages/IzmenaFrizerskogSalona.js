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
            <div className="change-salon__wrapper">
                <form action="#" method="POST">
                    <label>ID</label>
                    <input type="text" defaultValue={salon.id} readOnly />
                    <label>Naziv</label>
                    <input type="text" defaultValue={salon.naziv} onChange={(e) => {setNaziv(e.target.value)}} required/>
                    <label>Adresa</label>
                    <input type="text" defaultValue={salon.adresa} onChange={(e) => {setAdresa(e.target.value)}} required/>
                    <button type="submit" onClick={() => izmeni()}>Izmeni</button>
                    <Link to={'/admin'} onClick={() => cancel()}>Cancel</Link>
                </form>
            </div>
        </section>
    )
}

export default IzmeniFrizerskiSalon