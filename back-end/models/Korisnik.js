import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Korisnik = db.define('korisnici', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ime: {
        type: DataTypes.STRING
    },
    prezime: {
        type: DataTypes.STRING
    },
    korisnickoIme: {
        type: DataTypes.STRING
    },
    lozinka: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    adresa: {
        type: DataTypes.STRING
    },
    jmbg: {
        type: DataTypes.STRING
    },
    brojTelefona: {
        type: DataTypes.STRING
    },
    tipKorisnika: {
        type: DataTypes.STRING
    },
    blokiran: {
        type: DataTypes.BOOLEAN
    }
}, {
    freezeTableName: true
});

export default Korisnik;