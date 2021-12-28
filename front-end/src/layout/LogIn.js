import React from "react";
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <section className="log-in">
            <form className="log-in__form" action="#" method="GET">
                <label className="log-in__username" htmlFor="username">Username</label>
                <input className="log-in__username-i" type="text" name="username"/> <br />
                <label className="log-in__password" htmlFor="password">Password</label>
                <input className="log-in__password-i" type="password" name="password"/> <br />
                <input className="log-in__button" type="submit" value="Log In" />
                <Link to={'/registracija'}>Registracija</Link>
            </form>
        </section>
    )
}

export default LogIn;