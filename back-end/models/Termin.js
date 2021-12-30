import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Termin = db.define('termin', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    datum: {
        type: DataTypes.STRING
    },
    vremePocetka: {
        type: DataTypes.STRING
    },
    vremeZavrsetka: {
        type: DataTypes.STRING
    },
    tipTermina: {
        type: DataTypes.STRING
    },
    statusTermina: {
        type: DataTypes.STRING
    },
    frizerID: {
        type: DataTypes.INTEGER
    },
    clanID: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

export default Termin;