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
            <div>
                <Nav />
                {
                    fSalon.map((fSalon) => (
                        <div key={fSalon.id}>
                            <p><span>{fSalon.naziv}</span></p>
                            <p>Adresa: <span>{fSalon.adresa}</span></p>
                            <button onClick={ () => deleteOne(fSalon.id) }>Obrisi</button>
                            <Link to={'/izmeniFrizerskiSalon'} onClick={() => changeOne(fSalon)}>Izmeni</Link>
                        </div>
                    ))
                }
            </div>
        )
    } 
    return (
        <div className='f-salon'>
            {
                fSalon.map((fSalon) => (
                    <div key={fSalon.id} className='f-salon__wrapper'>
                        <TypingEffect 
                            eraseDelay={1000} typingDelay={1000} eraseSpeed={50} speed={50} className="f-salon__title" 
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