/*
Auteur: Vikki Dolt
Date: 20.12.2024
*/ 

import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

let compteur = 0;

app.use(express.json());

app.get('/', (req, res) => {
  compteur += 1;
  res.send(`Hello, pokemons! (${compteur} visites)`);
});

import { pokemonsRouter } from "./routes/pokemons.mjs";
app.use("/api/pokemons", pokemonsRouter);

import { dimensionsRouter } from "./routes/dimensions.mjs";
app.use("/api/dimensions", dimensionsRouter);

app.listen(port, () =>
  console.log(`Notre application est démarée sur : http://localhost:${port}`)
);
