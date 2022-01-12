import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "../layout/Nav";

function TerminList() {

    const [appointments, setAppointment] = useState([]);
    const loggedInUserLS = localStorage.getItem('korisnik');
    const loggedInUser = JSON.parse(loggedInUserLS);

    useEffect(() => {
        getAllAppointment();
    }, []);

    const getAllAppointment = async () => {
        const response = await axios.get('http://localhost:5000/termin');
        setAppointment(response.data);
    }

    return(
        <section className="termini">
            <div className="termini__nav">
                <Nav />
            </div>
            <div className="termini__wrapper table-center">
                <table>
                    <thead>
                        <tr>
                            <td>Datum</td>
                            <td>Vreme pocetka</td>
                            <td>Vreme zavrsetka</td>
                            <td>Frizer</td>
                            <td>Clan</td>
                            <td>Prihvati</td>
                            <td>Otkazi</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.filter((appointment) => appointment.frizerID === loggedInUser.id).map((termini) => (
                                <tr key={termini.id}>
                                    <td>{termini.datum}</td>
                                    <td>{termini.vremePocetka}</td>
                                    <td>{termini.vremeZavrsetka}</td>
                                    <td>{termini.frizerID}</td>
                                    <td>{termini.clanID}</td>
                                    {
                                        termini.statusTermina.includes('slobodan') ? 
                                        <>
                                            <td><button className="table-button">Prihvati</button></td>
                                            <td><button className="table-button">Otkazi</button></td>
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

export default TerminList;