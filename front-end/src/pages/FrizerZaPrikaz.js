import React from "react";
import { Link } from "react-router-dom";
import Nav from "../layout/Nav";

function FrizerZaPrikaz () {

    const userLS = localStorage.getItem('frizerZaPrikaz');
    const employee = JSON.parse(userLS);

    const cancel = () => {
        localStorage.removeItem('frizerZaPrikaz');
    }

    return(
        <section className="employee">
            <div className="employee__nav">
                <Nav />
            </div>
            <div className="employee__wrapper">
                <div>
                    <p>{employee.ime}</p>
                    <p>{employee.prezime}</p>
                    <p>{employee.brojTelefona}</p>
                    <p>{employee.email}</p>
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
            </div>
        </section>
    )
}

export default FrizerZaPrikaz;