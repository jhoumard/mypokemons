import express from "express";
import { pokemons, getUniqueId } from "../db/mock-pokemon.mjs";

const pokemonsRouter = express();

pokemonsRouter.get("/", (req, res) => {
    const message = "La liste des pokemons a bien été récupérée !";
    res.json({ message, data: pokemons });
});

pokemonsRouter.get("/:id", (req, res) => {
    const pokemonId = req.params.id;
    const pokemon = pokemons.find((pokemon) => pokemon.id == pokemonId);
    const message = `Le pokemon dont l'id est ${pokemonId} a été récupéré !`;
    res.json({message, data: pokemon})
});

pokemonsRouter.post("/", (req, res) => {
    const id = getUniqueId(pokemons);
    const createdPokemon = { ...req.body, ...{id: id, created: new Date()}};
    pokemons.push(createdPokemon);
    const message = `Le pokemon ${createdPokemon.name} a bien été créé !`;
    res.json({message, createdPokemon});
});

export { pokemonsRouter };
