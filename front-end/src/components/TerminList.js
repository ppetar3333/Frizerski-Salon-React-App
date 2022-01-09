import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';

function TerminList() {

    const [termin, setTermin] = useState([]);
    const loggedInUserLS = localStorage.getItem('korisnik');
    const loggedInUser = JSON.parse(loggedInUserLS);

    useEffect(() => {
        getAllTermini();
    }, []);

    const getAllTermini = async () => {
        const response = await axios.get('http://localhost:5000/termin');
        setTermin(response.data);
    }

    return(
        <section>
            <h3>Svi Termini</h3>
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
                        termin.filter((termin) => termin.frizerID === loggedInUser.id).map((termini) => (
                            <tr key={termini.id}>
                                <td>{termini.datum}</td>
                                <td>{termini.vremePocetka}</td>
                                <td>{termini.vremeZavrsetka}</td>
                                <td>{termini.frizerID}</td>
                                <td>{termini.clanID}</td>
                                {
                                    termini.statusTermina.includes('slobodan') ? 
                                    <>
                                        <td><button>Prihvati</button></td>
                                        <td><button>Otkazi</button></td>
                                    </> 
                                    : null
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default TerminList;