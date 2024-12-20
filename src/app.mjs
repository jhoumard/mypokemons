/*
* Auteur : Samuel Gergely
* Date : 20.12.2024
* Description : liste de pokemons et de dimensions de l'univer fictif "Pokemon"
* */

import express from "express";

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
  res.send(`Hello, pokemons!`);
});

import { pokemonsRouter } from "./routes/pokemons.mjs";
app.use("/api/pokemons", pokemonsRouter);

import { dimensionsRouter } from "./routes/dimensions.mjs";
app.use("/api/dimensions", dimensionsRouter);

app.listen(port, () =>
  console.log(`Notre application est démarée sur : http://localhost:${port}`)
);
