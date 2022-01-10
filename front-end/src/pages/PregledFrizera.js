import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Nav from "../layout/Nav";

function PregledFrizera() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/korisnici');
        setUsers(response.data);
    }

    const showUser = (usr) => {
        localStorage.setItem('frizerZaPrikaz', JSON.stringify(usr));
    }

    return (
        <section className="show-frizer">
            <div className="show-frizer__nav">
                <Nav />
            </div>
            <div className="show-frizer__wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Broj Telefona</th>
                            <th>Email</th>
                            <th>Detaljnije</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.filter((user) => user.tipKorisnika.includes('frizer')).map((usr) => (
                                <tr key={usr.id}>
                                    <td>{usr.ime}</td>
                                    <td>{usr.prezime}</td>
                                    <td>{usr.brojTelefona}</td>
                                    <td>{usr.email}</td>
                                    <td><Link to={'/frizerZaPrikaz'} onClick={() => showUser(usr)}>Prikazi</Link></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )

}

export default PregledFrizera;