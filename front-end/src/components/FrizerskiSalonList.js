import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
 
function FrizerskiSalonList () {
    const [frizerskiSaloni, setfrizerskiSaloni] = useState([]);
    const korisnikLS = localStorage.getItem('korisnik');
    let tipKorisnika = '';

    if(korisnikLS !== null) {
        const parsed = JSON.parse(korisnikLS);
        tipKorisnika = parsed.tipKorisnika;
    }

    useEffect(() => {
        getFrizerskiSaloni();
    }, []);
 
    const getFrizerskiSaloni = async () => {
        const response = await axios.get('http://localhost:5000/frizerskisalonpodaci');
        setfrizerskiSaloni(response.data);
    }

    const obrisi = async (id) => {
        await axios.delete(`http://localhost:5000/frizerskisalonpodaci/${id}`);
        getFrizerskiSaloni();
    }

    if(tipKorisnika === 'admin') {
        return (
            <div>
                {
                    frizerskiSaloni.map((fSalon) => (
                        <div key={fSalon.id}>
                            <p>Naziv: <span>{fSalon.naziv}</span></p>
                            <p>Adresa: <span>{fSalon.adresa}</span></p>
                            <button onClick={ () => obrisi(fSalon.id) }>Obrisi</button>
                            <Link to={'/izmeni'}>Izmeni</Link>
                        </div>
                    ))
                }
            </div>
        )
    } 
    return (
        <div>
            {
                frizerskiSaloni.map((fSalon) => (
                    <div key={fSalon.id}>
                        <p>Naziv: <span>{fSalon.naziv}</span></p>
                        <p>Adresa: <span>{fSalon.adresa}</span></p>
                    </div>
                ))
            }
        </div>
    )
}
 
export default FrizerskiSalonList