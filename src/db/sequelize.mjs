import { Sequelize, DataTypes } from "sequelize";
import { DB_USER, DB_PASSWORD } from "./env.mjs"

const sequelize = new Sequelize(
    "db_pokemons",  // Nom de la DB qui doit exister
    DB_USER,        // Nom de l'utilisateur
    DB_PASSWORD,    // Mot de passe de l'utilisateur
    {
        host: "localhost",
        //port: "3306",
        dialect: "mysql",
        logging: false,
    }
);

import { pokemons } from "./mock-pokemon.mjs";
import { PokemonModel } from "../models/pokemons.mjs";

// Le modèle pokemon
const Pokemon = PokemonModel(sequelize, DataTypes);
let initDb = () => {
    return sequelize
        .sync({ force: true }) // Force la synchro => donc supprime les données également
        .then((_) => {
            importPokemons();
            console.log("La base de données a bien été synchronisée");
        });
};

const importPokemons = () => {
    // import tous les pokemons présents dans le fichier db/mock-pokemon
    pokemons.map(p => {
        Pokemon.create({
            name: p.name,
            dimensionId: p.dimensionId,
        }).then(p => console.log(p.toJSON()));
    });
};

export { sequelize, initDb, Pokemon };
