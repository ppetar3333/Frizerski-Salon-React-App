import { useState, useEffect } from 'react'
import axios from "axios";
 
function FrizerskiSalonList () {
    const [frizerskiSaloni, setfrizerskiSaloni] = useState([]);
 
    useEffect(() => {
        getFrizerskiSaloni();
    }, []);
 
    const getFrizerskiSaloni = async () => {
        const response = await axios.get('http://localhost:5000/frizerskisalonpodaci');
        setfrizerskiSaloni(response.data);
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