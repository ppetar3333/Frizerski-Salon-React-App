import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import TypingEffect from 'react-typing-effect';
import Nav from '../layout/Nav';

 
function FrizerskiSalonList () {

    const [fSalon, setfSaloni] = useState([]);
    const userLS = localStorage.getItem('korisnik');
    let typeOfUser = '';

    if(userLS !== null) {
        const parsed = JSON.parse(userLS);
        typeOfUser = parsed.tipKorisnika;
    }

    useEffect(() => {
        getFSaloni();
    }, []);
 
    const getFSaloni = async () => {
        const response = await axios.get('http://localhost:5000/frizerskisalonpodaci');
        setfSaloni(response.data);
    }

    const deleteOne = async (id) => {
        await axios.delete(`http://localhost:5000/frizerskisalonpodaci/${id}`);
        getFSaloni();
    }

    const changeOne = (fSalon) => {
        localStorage.setItem('frizerskiSalon', JSON.stringify(fSalon));
    }

    if(typeOfUser === 'admin') {
        return (
            <section>
                <div>
                    <Nav />
                </div>
                <div className='table-center'>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Naziv</th>
                                <th>Adresa</th>
                                <th>Obrisi</th>
                                <th>Izmeni</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fSalon.map((fSalon, index) => (
                                    <tr key={fSalon.id}>
                                        <td>{index + 1}</td>
                                        <td>{fSalon.naziv}</td>
                                        <td>{fSalon.adresa}</td>
                                        <td><Link className="table-button" to={'/izmeniFrizerskiSalon'} onClick={() => changeOne(fSalon)}>Izmeni</Link></td>
                                        <td><button className="table-button" onClick={() => deleteOne(fSalon.id)}>Obrisi</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        )
    } 
    return (
        <div className='f-salon'>
            {
                fSalon.map((fSalon) => (
                    <div key={fSalon.id} className='f-salon__wrapper'>
                        <TypingEffect 
                            eraseDelay={1000} typingDelay={1000} eraseSpeed={50} speed={50} className="welcome__title" 
                            text={['Welcome To Our Berber Shop - '] + fSalon.naziv + '!'}>
                        </TypingEffect>
                        <p className='f-salon__info'>You can find us on address - <span>{fSalon.adresa}</span></p>
                    </div>
                ))
            }
        </div>
    )
}
 
export default FrizerskiSalonList