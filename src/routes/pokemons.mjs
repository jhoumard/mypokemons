import express from "express";
import { pokemons } from "../db/mock-pokemon.mjs";

const pokemonsRouter = express();

pokemonsRouter.get("/", (req, res) => {
    const message = "La liste des pokemons a bien été récupérée !";
    res.json({ message, data: pokemons });
});

export { pokemonsRouter };
