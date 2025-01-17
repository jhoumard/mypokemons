/*
Auteur: Simon Awelachew
Date: 17.01.2025
Version: Test_02 Pokemons
*/



// https://sequelize.org/docs/v7/models/data-types/

const PokemonModel = (sequelize, DataTypes) => {
    return sequelize.define(
        "Pokemon",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique:{
                    msg: "Ce nom est déjà pris.",
                },
                validate:{
                    is:{
                        args: ["^[é-è]+$",'i'],
                        msg: "seul les nom composé uniquement de lettre é ou è sont autorisées.",
                    },
                    notEmpty: {
                        msg: "Le nom ne peut pas être vide",
                    },
                    NotNull: {
                        msg: "Le nom est une propiété obligatoire",
                    },
                },
                

            },
            dimensionId: {
                type: DataTypes.INTEGER,
                validate:{
                    min:{
                        args: [1.0],
                        msg: "La dimension doit être suppérieur a 1",
                    },
                    max:{
                        args: [3.0],
                        msg: "La dimension doit être inférieur a 3"

                    },
                },
            },
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: false,
        }
    );
};

export { PokemonModel };