import express from "express";
import { pokemons, getPokemon, updatePokemon, removePokemon } from "../db/mock-pokemon.mjs";
import { getUniqueId } from "./helpers.mjs";

const pokemonsRouter = express();

pokemonsRouter.get("/", (req, res) => {
    const message = "La liste des pokemons a bien été récupérée !";
    res.json({ message, data: pokemons });
});

// 2. Obtenir un pokemon en particulier.
pokemonsRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const pok = getPokemon(id);
    const message = `Le pokemon dont l'id vaut ${id} a bien été récupéré.`;
    res.json({ message, data: pok });
});

// 3. Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    const id = getUniqueId(pokemons);
    const createdPok = { ...req.body, ...{ id: id, created: new Date() } };
    pokemons.push(createdPok);

    const message = `Le pokemon ${createdPok.name} a bien été créé !`;
    res.json({ message, data: createdPok });
});

// 4. Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    const pok = getPokemon(id);
    const updatedPok = { id: id, ...req.body, created: pok.created }; // A noter que la propriété 'created' n'étant pas modifiée, sera conservée telle quelle.
    updatePokemon(id, updatedPok);

    const message = `Le pokemon ${updatedPok.name} a bien été modifié !`;
    res.json({ message, data: updatedPok });
});

// 5. Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    let deletedPok = getPokemon(id);
    removePokemon(id);

    const message = `Le pokemon ${deletedPok.name} a bien été supprimé !`;
    res.json({ message, data: deletedPok });
});

export { pokemonsRouter };
