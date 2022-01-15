import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from "../layout/Nav";
import moment from 'moment';

function KorisniciList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/korisnici');
        setUsers(response.data)
    }

    const deleteOne = async (id) => {
        await axios.delete(`http://localhost:5000/korisnici/${id}`);
        getUsers();
    }

    const blockOne = async (id) => {
        await axios.patch(`http://localhost:5000/korisnici/${id}`,{
            blokiran: true,
            updatedAt: moment().format('YYYY:MM:DD')
        });
        getUsers();
    }

    const unblockOne = async (id) => {
        await axios.patch(`http://localhost:5000/korisnici/${id}`,{
            blokiran: false,
            updatedAt: moment().format('YYYY:MM:DD')
        });
        getUsers();
    }

    const changeOne = (korisnik) => {
        localStorage.setItem('korisnikIzmena', JSON.stringify(korisnik));
    }

    return(
        <section className="users">
            <div className="users__nav">
                <Nav />
            </div>
            <div className="users__wrapper table-center">
                <table>
                    <thead>
                        <tr>
                            <th>Ime</th>
                            <th>Prezime</th>
                            <th>Email</th>
                            <th>JMBG</th>
                            <th>Tip Korisnika</th>
                            <th>Izmeni</th>
                            <th>Obrisi</th>
                            <th>Block/Unblock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.ime}</td>
                                    <td>{user.prezime}</td>
                                    <td>{user.email}</td>
                                    <td>{user.jmbg}</td>
                                    <td>{user.tipKorisnika}</td>
                                    <td><Link className="table-button" to={'/izmenaKorisnika'} onClick={() => changeOne(user)}>Izmeni</Link></td>
                                    <td><button className="table-button"  onClick={() => deleteOne(user.id)}>Obrisi</button></td>
                                    {
                                        user.tipKorisnika.includes('clan') ? 
                                            <>
                                                {
                                                    user.blokiran === false ?  <td><button className="table-button center" onClick={() => blockOne(user.id)}>Blokiraj</button></td> : null
                                                }
                                                {
                                                    user.blokiran === true ? <td><button className="table-button center" onClick={() => unblockOne(user.id)}>Odblokiraj</button></td> : null
                                                }
                                            </> 
                                        : null
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default KorisniciList;