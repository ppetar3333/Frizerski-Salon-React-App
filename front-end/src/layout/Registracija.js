import React from "react";
import { useState, useEffect } from 'react';
import Nav from "./Nav";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

function Registracija() {

    let navigate = useNavigate();
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [korisnickoIme, setKorisnickoIme] = useState('');
    const [lozinka, setLozinka] = useState('');
    const [brTelefona, setBrTelefona] = useState('');
    const [jmbg, setJmbg] = useState('');
    const [email, setEmail] = useState('');
    const [adresa, setAdresa] = useState('');
    const [userID, setUserID] = useState(0);

    useEffect(() => {
        getUsers();
    },[])

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/korisnici');
        response.data.forEach(element => {
            if(element.id > userID) {
                setUserID(element.id);
            }
        });
    }

    const register = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/korisnici/create',{
            id: userID + 1,
            ime: ime,
            prezime : prezime,
            korisnickoIme : korisnickoIme,
            lozinka : lozinka,
            email : email,
            adresa : adresa,
            jmbg : jmbg,
            brojTelefona : brTelefona,
            tipKorisnika : 'clan',
            blokiran : false,
            createdAt: moment().format("YYYY-MM-DD"),
            updatedAt: moment().format("YYYY-MM-DD")
        }).then((response) => {
            console.log(response);
            navigate('/login');
        })
    }

    return (
        <section className="registration">
            <Nav />
            <form method="POST" action="registracija" onSubmit={register} className="forms__wrapper">
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
                    <button className="forms__button" type="submit">Register</button>
                </div>
            </form>
        </section>
    )
}

export default Registracija;