/*
Auteur: Simon Awelachew
Date: 17.01.2025
Version: Test_02 Pokemons
*/


import express from "express";
import { Pokemon } from "../db/sequelize.mjs";
import { success } from "./helpers.mjs";
import { pokemons } from "../db/mock-pokemon.mjs";

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
    pokemons.findByPk(req.params.id).then((pokemons) => {
        const message = `Le pokemons dont l'id vaut ${pokemons.id} a bien été récupéré.`;
        res.json(success(message, pokemons));
        });
});

// Ajouter un pokemon.
pokemonsRouter.post("/", (req, res) => {
    pokemons.create(req.body).then((createdPokemons) => {
        // Définir un message pour le consommateur de l'API REST
        const message = `Le pokemon ${createdPokemons.name} a bien été créé !`;

        // Retourner la réponse HTTP en json avec le msg et le produit créé
        res.json(success(message, createdPokemons));
        });

});

// Modifier un pokemon.
pokemonsRouter.put("/:id", (req, res) => {
    const pokemonsId = req.params.id;
    pokemons.update(req.body, { where: { id: pokemonsId } }).then((_) => {
    })
    .catch((error) => {
        const message =
            "Erreur Forbidden";
        res.status(403).json({ message, data: error });
    });


});

// Supprimer un pokemon.
pokemonsRouter.delete("/:id", (req, res) => {
      Product.findByPk(req.params.id).then((deletedProduct) => {
      if (deletedProduct === null) {
          const message =
          "Le produit demandé n'existe pas. Merci de réessayer avec un autre identifiant.";
          // A noter ici le return pour interrompre l'exécution du code
          return res.status(404).json({ message });
      }  
      return Product.destroy({
          where: { id: deletedProduct.id },
      }).then((_) => {
          // Définir un message pour le consommateur de l'API REST
          const message = `Le produit ${deletedProduct.name} a bien été supprimé !`;

          // Retourner la réponse HTTP en json avec le msg et le produit créé
          res.json(success(message, deletedProduct));
      });
  })
  .catch((error) => {
      const message =
          "Le produit n'a pas pu être supprimé. Merci de réessayer dans quelques instants.";
      res.status(500).json({ message, data: error });
  });  

});

export { pokemonsRouter };
