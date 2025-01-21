/**
 * Nom : Thanavine Le Cocq
 * Date : 17.01.2025
**/

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

// 5. Compteur d’appels à la route «home» de l’application (http://localhost:3000/) depuis le démarrage de celle-ci.
var visits = 0;
this.visits = increment(this.visits);
app.get('http://localhost:3000/api/pokemons', (req, res) => {
  visits++;
  let message = res.send(`${visits} requêtes de la liste des pokemons`);
  print(message);
});

import { pokemonsRouter } from "./routes/pokemons.mjs";
app.use("/api/pokemons", pokemonsRouter);

import { dimensionsRouter } from "./routes/dimensions.mjs";
app.use("/api/dimensions", dimensionsRouter);

app.listen(port, () =>
  console.log(`Notre application est démarée sur : http://localhost:${port}`)
);

// 6. verifier les erreurs fréquente
sequelize
    .authenticate()
    .then((_) =>
        console.log("La connexion à la base de données a bien été établie")
    )
    .catch((error) => console.error("Impossible de se connecter à la DB"));
initDb();

app.use(({ res }) => {
  const message =
      "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json(message);
});

export {pokemonsRouter, initDb, sequelize } ;