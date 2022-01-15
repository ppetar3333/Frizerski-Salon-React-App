import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../layout/Nav";
import axios from "axios";
import { useState, useEffect } from 'react';
import moment from 'moment';

function FrizerZaPrikaz () {

    const userLS = localStorage.getItem('frizerZaPrikaz');
    const employee = JSON.parse(userLS);
    const loggedInUserLS = localStorage.getItem('korisnik');
    const loggedInUser = JSON.parse(loggedInUserLS);
    const [datum, setDatum] = useState('');
    const [vremeOd, setVremeOd] = useState('');
    const [vremeDo, setVremeDo] = useState('');
    let navigate = useNavigate();
    const [newID, setNewID] = useState(0);

    const cancel = () => {
        localStorage.removeItem('frizerZaPrikaz');
    }

    useEffect(() => {
        getAllAppointments();
    },[]);

    const getAllAppointments = async () => {
        const response = await axios.get('http://localhost:5000/termin');
        response.data.forEach(element => {
            if(element.id > newID) {
                setNewID(element.id);
            }
        });
    }

    const reserveAppointment = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/termin/create', {
            id: newID + 1,
            datum: datum,
            vremePocetka: vremeOd,
            vremeZavrsetka: vremeDo,
            tipTermina: 'potpun',
            statusTermina: 'slobodan',
            frizerID: employee.id,
            clanID: loggedInUser.id,
            createdAt: moment().format('YYYY:MM:DD'),
            updatedAt: moment().format('YYYY:MM:DD'),
        }).then((respone) => {
            console.log(respone);
            navigate('/clan')
        })
    }

    return(
        <section className="employee">
            <div className="employee__nav">
                <Nav />
            </div>
            <div className="table-wrapper">
                <div className='table-top'>
                    <table>
                        <thead>
                            <tr>
                                <td>Ime</td>
                                <td>Prezime</td>
                                <td>Broj Telefona</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{employee.ime}</td>
                                <td>{employee.prezime}</td>
                                <td>{employee.brojTelefona}</td>
                                <td>{employee.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="employee__wrapper">
                <form method="POST" action="frizerZaPrikaz" onSubmit={reserveAppointment} className="forms__wrapper">
                    <div className="forms__form">
                        <label className="forms__label">Izaberi datum</label>
                        <input className="forms__input" type="date" onChange={(e) => {setDatum(e.target.value)}}/>
                        <label className="forms__label">Vreme od</label>
                        <input className="forms__input" type="number" onChange={(e) => {setVremeOd(e.target.value)}}/>
                        <label className="forms__label">Vreme do</label>
                        <input className="forms__input" type="number" onChange={(e) => {setVremeDo(e.target.value)}}/>
                        <button className="forms__button" type="submit">Rezervisi</button>
                        <Link className="forms__button forms__button--cancel" to={'/clan'} onClick={() => cancel()}>Cancel</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FrizerZaPrikaz;