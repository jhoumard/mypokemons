/*
* Auteur : Samuel Gergely
* Date : 17.01.2025
* */

import express from "express";
import { initDb, sequelize } from "./db/sequelize.mjs";

const app = express();
const port = 3000;

app.use(express.json());

sequelize
  .authenticate()
  .then((_) => console.log("La connexion à la base de données a bien été établie"))
  .catch((error) => console.error(`Impossible de se connecter à la DB: ${error}`));

initDb();

// Compteur d’appels à la route «home» de l’application (http://localhost:3000/) depuis le démarrage de celle-ci.
let visits = 0;
app.get('/', (req, res) => {
  visits++;
  res.send(`Hello, pokemons! (${visits} visites)`);
});

let visits2 = 0;
app.get('api/pokemons', (req, res) => {
  visits2++;
  if (visits2 === 1) {
    res.send(`${visits2} requête de la liste des pokemons.`);
  }
  else {
    res.send(`${visits2} requêtes de la liste des pokemons.`);
  }
})

import { pokemonsRouter } from "./routes/pokemons.mjs";
app.use("/api/pokemons", pokemonsRouter);
app.use("/cofffe", pokemonsRouter);

import { dimensionsRouter } from "./routes/dimensions.mjs";
app.use("/api/dimensions", dimensionsRouter);

app.listen(port, () =>
  console.log(`Notre application est démarée sur : http://localhost:${port}`)
);
