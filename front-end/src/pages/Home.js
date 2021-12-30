import React from "react";
import { Link } from 'react-router-dom';
import FrizerskiSalonList from '../components/FrizerskiSalonList';

function Home() {
    return(
        <div>
            <h1>Welcome to frizerski salon website</h1>
            <FrizerskiSalonList />
            <Link to="/login">LogIn</Link>
            <p>Do not have account? <Link to="/registracija">Registracija</Link></p>
        </div>
    )
}

export default Home;