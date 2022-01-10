import React from "react";
import Nav from "../layout/Nav";

function Frizer() {

    const userLS = localStorage.getItem('korisnik');
    const user = JSON.parse(userLS);

    return (
        <section>
            <Nav />
            <div>
                <div>
                    <h2>Welcome, {user.ime}</h2>
                </div>
            </div>
        </section>  
    )
}

export default Frizer;