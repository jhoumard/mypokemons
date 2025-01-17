import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";

const pokemonsRouter = express();

// Obtenir la liste des pokemons.
pokemonsRouter.get("/", (req, res) => {
    Pokemon.findAll()
        .then(pokemons => {
            const message = "La liste des pokemons a bien été récupérée !";
            res.json(success(message, pokemons));
        })
        .catch(error => {
            const message = "Erreur 500: La liste des pokemons n'a pas pu être récupérée. Merci de réessayer plus tard.";
            res.status(500).json({ message, data: error });
        });
});

// Obtenir un pokemon en particulier.
pokemonsRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    Pokemon.findByPk(id)
        .then(pokemon => {
            if (pokemon === null) {
                const message = `Le pokemon ${id} n'existe pas.`;
                return res.status(404).json({ message });
            }
            const message = `Le pokemon ${id} a bien été récupéré.`;
            res.json(success(message, pokemon));
        })
        .catch(error => {
            const message = `Le pokemon ${id} n'a pas pu être récupéré. Vérifiez le serveur.`;
            res.status(500).json({ message, data: error });
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    const pokemon = req.body;
    Pokemon.create(pokemon)
        .then(newPokemon => {
            const message = `Le pokemon ${newPokemon.name} a bien été ajouté.`;
            res.json(success(message, newPokemon));
        })
        .catch(error => {
            const message = `Le pokemon n'a pas pu être ajouté. Vérifiez le serveur.`;
            res.status(500).json({ message, data: error });
        });
});

// Modifier un pokemon.
/*pokemonsRouter.put("/:id", (req, res) => {
    const id = req.params.id;
    const pokemon = req.body;
    Pokemon.update(pokemon, { where: { id } })
        .then(([rowsUpdate]) => {
            if (rowsUpdate === 0) {
                const message = `Le pokemon ${id} n'existe pas.`;
                return res.status(404).json({ message });
            }
            const message = `Le pokemon ${id} a bien été modifié.`;
            res.json(success(message, pokemon));
        })
        .catch(error => {
            const message = `Le pokemon ${id} n'a pas pu être modifié. Vérifiez le serveur.`;
            res.status(500).json({ message, data: error });
        });
});*/

pokemonsRouter.put("/:id", (req, res) => {
    const id = req.params.id;
        const message = `Forbidden`;
        res.status(403).json({ message });
        }     
);



// Supprimer un pokemon.

/*pokemonsRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    Pokemon.destroy({ where: { id } })
        .then(deleted => {
            if (deleted === 0) {
                const message = ` Le pokemon ${id} n'existe pas.`;
                return res.status(404).json({ message });
            }
            const message = `Le pokemon ${id} a bien été supprimé.`;
            res.json(success(message, null));
        })
        .catch(error => {
            const message = `Le pokemon ${id} n'a pas pu être supprimé. Vérifiez le serveur.`;
            res.status(500).json({ message, data: error });
        });
});*/

pokemonsRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
        const message = `Forbiden`;
        res.status(403).json({ message });
        }     
);

export { pokemonsRouter };