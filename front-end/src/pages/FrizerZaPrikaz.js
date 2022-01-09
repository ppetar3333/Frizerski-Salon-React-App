import React from "react";
import { Link } from "react-router-dom";

function FrizerZaPrikaz () {

    const frizerLS = localStorage.getItem('frizerZaPrikaz');
    const frizer = JSON.parse(frizerLS);

    const cancel = () => {
        localStorage.removeItem('frizerZaPrikaz');
    }

    return(
        <section>
            <div>
                <p>{frizer.ime}</p>
                <p>{frizer.prezime}</p>
                <p>{frizer.brojTelefona}</p>
                <p>{frizer.email}</p>
            </div>
            <form method="post" action="#">
                <label>Izaberi datum</label>
                <input type="date" />
                <label>Vreme od</label>
                <input type="number" />
                <label>Vreme do</label>
                <input type="number" />
                <button type="submit">Rezervisi</button>
                <Link to={'/clan'} onClick={() => cancel()}>Cancel</Link>
            </form>
        </section>
    )
}

export default FrizerZaPrikaz;