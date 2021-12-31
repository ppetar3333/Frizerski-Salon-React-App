import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";

function PregledFrizera() {

    const [korisnici, setKorisnici] = useState([]);

    useEffect(() => {
        getKorisnici();
    }, []);

    const getKorisnici = async () => {
        const response = await axios.get('http://localhost:5000/korisnici/samoFrizeri');
        setKorisnici(response.data);
    }

    const te = () => {
        console.log(korisnici);
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
                        <th><button onClick={te}>te</button></th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        korisnici.map((korisnik) => (
                            <tr key={korisnik.id}>
                                <td>{korisnik.ime}</td>
                                <td>{korisnik.prezime}</td>
                                <td>{korisnik.brojTelefona}</td>
                                <td>{korisnik.email}</td>
                            </tr>
                        ))
                    } */}
                </tbody>
            </table>
        </section>
    )

}

export default PregledFrizera;