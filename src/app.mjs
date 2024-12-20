import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  let increment = x => { return x + 1};
  res.send(`Hello, pokemons! (${increment()} visites)`);
});

import { pokemonsRouter } from "./routes/pokemons.mjs";
app.use("/api/pokemons", pokemonsRouter);

import { dimensionsRouter } from "./routes/dimensions.mjs";
app.use("/api/dimensions", dimensionsRouter);

app.listen(port, () =>
  console.log(`Notre application est démarée sur : http://localhost:${port}`)
);
