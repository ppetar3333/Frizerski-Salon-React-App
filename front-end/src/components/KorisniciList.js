import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function KorisniciList() {

    const [korisnici, setKorisnici] = useState([]);

    useEffect(() => {
        getKorisnici();
    }, []);

    const getKorisnici = async () => {
        const response = await axios.get('http://localhost:5000/korisnici');
        setKorisnici(response.data)
    }

    return(
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>Email</th>
                    <th>JMBG</th>
                    <th>Tip Korisnika</th>
                    <th>Izmeni</th>
                </tr>
            </thead>
            <tbody>
                {
                    korisnici.map((korisnik, index) => (
                        <tr key={korisnik.id}>
                            <td>{ index + 1 }</td>
                            <td>{korisnik.ime}</td>
                            <td>{korisnik.prezime}</td>
                            <td>{korisnik.email}</td>
                            <td>{korisnik.jmbg}</td>
                            <td>{korisnik.tipKorisnika}</td>
                            <td><Link to={'/izmeni'}>Izmeni</Link></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default KorisniciList;