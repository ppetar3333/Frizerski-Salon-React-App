import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Nav from "../layout/Nav";
import moment from 'moment';
import axios from "axios";

function IzmeniFrizerskiSalon () {
    
    const salonLS = localStorage.getItem('frizerskiSalon');
    const salon = JSON.parse(salonLS);
    const [naziv, setNaziv] = useState('');
    const [adresa, setAdresa] = useState('');
    let navigate = useNavigate();
    
    const checkChange = (data, notChanged) => {
        if(data !== '') {
            return data;
        } else {
            return notChanged;
        }
    }

    const changeOne = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/frizerskisalonpodaci/change/${salon.id}`, {
            naziv: checkChange(naziv, salon.naziv),
            adresa: checkChange(adresa, salon.adresa),
            updatedAt: moment().format('YYYY-MM-DD')
        })
        navigate('/admin');
        removeItem();
    }

    const removeItem = () => {
        localStorage.removeItem('frizerskiSalon');
    }

    return(
        <section className="change-salon">
            <div className="change-salon__nav">
                <Nav />
            </div>
            <form action="izmeniFrizerskiSalon" method="POST" onSubmit={changeOne} className="forms__wrapper">
                <div className="forms__form">
                    <label className="forms__label">ID</label>
                    <input className="forms__input" type="text" defaultValue={salon.id} readOnly />
                    <label className="forms__label">Naziv</label>
                    <input className="forms__input" type="text" defaultValue={salon.naziv} onChange={(e) => {setNaziv(e.target.value)}} required/>
                    <label className="forms__label">Adresa</label>
                    <input className="forms__input" type="text" defaultValue={salon.adresa} onChange={(e) => {setAdresa(e.target.value)}} required/>
                    <button className="forms__button" type="submit">Izmeni</button>
                    <Link className="forms__button forms__button--cancel" to={'/admin'} onClick={() => removeItem()}>Cancel</Link>
                </div>
            </form>
        </section>
    )
}

export default IzmeniFrizerskiSalon