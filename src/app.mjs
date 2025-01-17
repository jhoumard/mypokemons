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

import { pokemonsRouter } from "./routes/pokemons.mjs";
app.use("/api/pokemons", pokemonsRouter);

import { dimensionsRouter } from "./routes/dimensions.mjs";
app.use("/api/dimensions", dimensionsRouter);

app.get("/api/cofffe", (req,res) =>{
  res.status(418).json(message);
});

app.listen(port, () =>
  console.log(`Notre application est démarée sur : http://localhost:${port}`)
);
app.use(({ res }) => {
  const message =
      "Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.";
  res.status(404).json(message);
});
