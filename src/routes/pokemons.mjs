import express from "express";
import { pokemons } from "../db/mock-pokemon.mjs";

const pokemonsRouter = express();

pokemonsRouter.get("/", (req, res) => {
    const message = "La liste des pokemons a bien été récupérée !";
    res.json({ message, data: pokemons });
});

pokemonsRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const pok = pokemons.find(x => x.id == id);
    const message = `Le pokemon dont l'id vaut ${id} a bien été récupéré.`;
    res.json({ message, data: pok });
});

export { pokemonsRouter };
