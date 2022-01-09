import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function PregledFrizera() {

    const [korisnici, setKorisnici] = useState([]);

    useEffect(() => {
        getKorisnici();
    }, []);

    const getKorisnici = async () => {
        const response = await axios.get('http://localhost:5000/korisnici');
        setKorisnici(response.data);
    }

    const prikazi = (kor) => {
        localStorage.setItem('frizerZaPrikaz', JSON.stringify(kor));
    }

    return (
        <section>
            <h2>Pregled Frizera</h2>
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
                        korisnici.filter((korisnik) => korisnik.tipKorisnika.includes('frizer')).map((kor) => (
                            <tr key={kor.id}>
                                <td>{kor.ime}</td>
                                <td>{kor.prezime}</td>
                                <td>{kor.brojTelefona}</td>
                                <td>{kor.email}</td>
                                <td><Link to={'/frizerZaPrikaz'} onClick={() => prikazi(kor)}>Prikazi</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )

}

export default PregledFrizera;