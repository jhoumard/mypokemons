import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

// 1. Ajouter un compteur d’appels à la route «home» de l’application
// (http://localhost:3000/) depuis le démarrage de celle-ci.
var visits = 0;
app.get('/', (req, res) => {
  visits++;
  res.send(`Hello, pokemons! (${visits} visites)`);
});

import { pokemonsRouter } from "./routes/pokemons.mjs";
app.use("/api/pokemons", pokemonsRouter);

import { dimensionsRouter } from "./routes/dimensions.mjs";
app.use("/api/dimensions", dimensionsRouter);

app.listen(port, () =>
  console.log(`Notre application est démarée sur : http://localhost:${port}`)
);
