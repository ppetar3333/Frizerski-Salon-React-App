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

    const obrisi = async (id) => {
        await axios.delete(`http://localhost:5000/korisnici/${id}`);
        getKorisnici();
    }

    const blokiraj = async (id) => {
        console.log('todo');
    }

    const odblokiraj = async (id) => {
        console.log('todo');
    }

    return(
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
                    <th>Blokiraj</th>
                    <th>Odblokiraj</th>
                </tr>
            </thead>
            <tbody>
                {
                    korisnici.map((korisnik) => (
                        <tr key={korisnik.id}>
                            <td>{korisnik.ime}</td>
                            <td>{korisnik.prezime}</td>
                            <td>{korisnik.email}</td>
                            <td>{korisnik.jmbg}</td>
                            <td>{korisnik.tipKorisnika}</td>
                            <td><Link to={'/izmeni'}>Izmeni</Link></td>
                            <td><button onClick={() => obrisi(korisnik.id)}>Obrisi</button></td>
                            <td><button onClick={() => blokiraj(korisnik.id)}>Blokiraj</button></td>
                            <td><button onClick={() => odblokiraj(korisnik.id)}>Odblokiraj</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default KorisniciList;