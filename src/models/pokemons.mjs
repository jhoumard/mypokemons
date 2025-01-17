/*
Author : Jérémie Chevalley
Date : 17.01.2025
Description : DB model for the pokemons
*/

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
                unique: { msg: "Ce nom de Pokemon est déjà pris" },
                validate: {
                    is: {
                        args: /^[A-Za-z\séè]*$/,
                        msg: "Seules les lettres, les espaces et certains caractères spéciaux (é,è) sont autorisées."
                    },
                    notEmpty: {
                        msg: "Le nom ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "Le nom est une propriété obligatoire."
                    }
                }
            },
            dimensionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Le nom ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "Le nom est une propriété obligatoire."
                    },
                    min: {
                        args: [1.0],
                        msg: "Les dimensions valides sont 1,2 et 3"
                    },
                    max: {
                        args: [3.0],
                        msg: "Les dimensions valides sont 1,2 et 3"
                    }
                }
            },
        },
        {
            timestamps: true,
            createdAt: "created",
            updatedAt: "updated",
        }
    );
};

export { PokemonModel };