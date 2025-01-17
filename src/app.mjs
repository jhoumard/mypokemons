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
var visits = 0;
app.get('/', (req, res) => {
  visits++;
  res.send(`Hello, pokemons! (${visits} visites)`);
});

app.get('/cofffe', (req, res) => {
  const message = "Im a teapot.";
  res.status(418).json(message);
});

import { pokemonsRouter } from "./routes/pokemons.mjs";
app.use("/api/pokemons", pokemonsRouter);

import { dimensionsRouter } from "./routes/dimensions.mjs";
app.use("/api/dimensions", dimensionsRouter);

// Si aucune route ne correspondant à l'URL demandée par le consommateur
app.use(({ res }) => {
  const message =
      "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json(message);
});

app.listen(port, () =>
  console.log(`Notre application est démarée sur : http://localhost:${port}`)
);
