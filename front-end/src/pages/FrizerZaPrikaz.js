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
            <div className="table-wrapper">
                <div className='table-top'>
                    <table>
                        <thead>
                            <tr>
                                <td>Ime</td>
                                <td>Prezime</td>
                                <td>Broj Telefona</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{employee.ime}</td>
                                <td>{employee.prezime}</td>
                                <td>{employee.brojTelefona}</td>
                                <td>{employee.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="employee__wrapper">
                <form method="post" action="#" className="forms__wrapper">
                    <div className="forms__form">
                        <label className="forms__label">Izaberi datum</label>
                        <input className="forms__input" type="date" />
                        <label className="forms__label">Vreme od</label>
                        <input className="forms__input" type="number" />
                        <label className="forms__label">Vreme do</label>
                        <input className="forms__input" type="number" />
                        <button className="forms__button" type="submit">Rezervisi</button>
                        <Link className="forms__button forms__button--cancel" to={'/clan'} onClick={() => cancel()}>Cancel</Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FrizerZaPrikaz;