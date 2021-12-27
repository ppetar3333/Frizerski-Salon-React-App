import { Sequelize } from "sequelize";
 
const db = new Sequelize('frizerskisalon', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;