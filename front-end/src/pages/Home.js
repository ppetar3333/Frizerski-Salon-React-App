import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>Welcome to frizerski salon website</h1>
            <Link to="/login">LogIn</Link>
            <p>Do not have account? <Link to="/registracija">Registracija</Link></p>
        </div>
    )
}

export default Home;