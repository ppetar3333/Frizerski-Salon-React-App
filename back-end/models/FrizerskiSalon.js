import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const FrizerskiSalon = db.define('frizerskisalonpodaci',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    naziv:{
        type: DataTypes.STRING
    },
    adresa:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});
 
export default FrizerskiSalon;