import React from "react";
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>Welcome to frizerski salon website</h1>
            <Link to="/login">LogIn</Link>
            <Link to="/registracija">Registracija</Link>
        </div>
    )
}

export default Home;