import { Sequelize, DataTypes } from "sequelize";
import { DB_USER, DB_PASSWORD } from "./env.mjs"

const sequelize = new Sequelize(
    "db_pokemons",  // Nom de la DB qui doit exister
    DB_USER,        // Nom de l'utilisateur
    DB_PASSWORD,    // Mot de passe de l'utilisateur
    {
        host: "127.0.0.1",
        //port: "3306",
        dialect: "mysql",
        logging: false,
    }
);

export { sequelize };
