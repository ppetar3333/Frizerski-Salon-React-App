import React from "react";
import { useNavigate } from 'react-router-dom';

function Admin() {
    
    let navigate = useNavigate();

    const odjava = () => {
        localStorage.removeItem("korisnik","admin");
        navigate('/');
    }

    return (
        <>
            <h1>Admin</h1>
            <button onClick={odjava}>Odjavi se</button>
        </>
    )
}

export default Admin;