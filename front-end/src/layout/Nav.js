import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Nav(){

    const userLS = localStorage.getItem('korisnik');
    let typeOfUser = '';

    if(userLS !== null) {
        const parsed = JSON.parse(userLS);
        typeOfUser = parsed.tipKorisnika;
    }

    const logout = () => {
        localStorage.clear();
    }

    const setUser = () => {
        localStorage.setItem('korisnikIzmena', userLS);
    }

    if(typeOfUser === 'admin') {
        return(
            <nav className="nav">
                <div className="nav__wrapper container">
                    <ul className="nav__list">
                        <div className="nav__img-wrapper">
                            <Link to={'/admin'}>
                                <img className="nav__img" src={logo} alt="Logo image" />
                            </Link>
                        </div>
                        <div className="nav__content">
                            <li className="nav__item"> <Link className="nav__link" to={'/izmenaKorisnika'} onClick={() => setUser()}>Svoji Podaci</Link> </li>
                            <li className="nav__item"> <Link className="nav__link" to={'/salonPodaci'}>Frizerski Salon</Link> </li>
                            <li className="nav__item"> <Link className="nav__link" to={'/korisniciPodaci'}>Korisnici</Link> </li>
                            <li className="nav__item"> <Link className="nav__link" to={'/'} onClick={() => logout()}>Odjavi se</Link> </li>
                        </div>
                    </ul>
                </div>
            </nav>
        )
    } else if(typeOfUser === 'clan'){
        return(
            <nav className="nav">
                <div className="nav__wrapper  container">
                    <ul className="nav__list">
                        <div className="nav__img">
                            <Link to={'/clan'}>
                                <img className="nav__img" src={logo} alt="Logo image" />
                            </Link>                       
                         </div>
                        <div className="nav__content">
                            <li className="nav__item"> <Link className="nav__link"to='/izmenaKorisnika' onClick={() => setUser()}>Svoji Podaci</Link> </li>
                            <li className="nav__item"> <Link className="nav__link" to='/pregledFrizera'>Pregled Frizera</Link> </li>
                            <li className="nav__item"> <Link className="nav__link" to={'/'} onClick={() => logout()}>Odjavi se</Link> </li>
                        </div>
                    </ul>
                </div>
            </nav>
        )
    } else if(typeOfUser === 'frizer') {
        return(
            <nav className="nav">
                <div className="nav__wrapper  container">
                    <ul className="nav__list">
                        <div className="nav__img">
                            <Link to={'/frizer'}>
                                <img className="nav__img" src={logo} alt="Logo image" />
                            </Link>                        
                        </div>
                        <div className="nav__content">
                            <li className="nav__item"><Link className="nav__link" to={'/izmenaKorisnika'} onClick={() => setUser()}>Svoji Podaci</Link></li>
                            <li className="nav__item"><Link className="nav__link" to={'/termini'}>Pregled Termina</Link></li>
                            <li className="nav__item"><Link className="nav__link" to={'/'} onClick={() => logout()}>Odjavi se</Link></li>
                        </div>
                    </ul>
                </div>
            </nav>
        )
    }

    return (
        <nav className="nav">
            <div className="nav__wrapper container">
                <ul className="nav__list">
                    <div className="nav__img">
                        <Link to={'/'}>
                            <img className="nav__img" src={logo} alt="Logo image" />
                        </Link>                    
                    </div>
                    <div className="nav__content">
                        <li className="nav__item"><Link className="nav__link" to="/login">LogIn</Link></li>
                        <li className="nav__item"><Link className="nav__link" to="/registracija">Registration</Link></li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;