/*
Author: Amael Jampen
Date: 17.01.1025
 */
// Ex 4

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
                unique: {
                    msg: "Ce nom est deja pris.",
                },
                validate: {
                    is: {
                        args: /^[A-Za-z]*$/,
                        msg: "Seules les lettres sont autorisées.",
                    },

                    notEmpty: {
                        msg: "Le nom ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "Le nom est une propriété obligatoire.",
                    },
                }
            },
            dimensionId: {
                type: DataTypes.INTEGER,
                validate: {

                    notEmpty: {
                        msg: "Le prix ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "Le prix est une propriété obligatoire.",
                    },
                    min: {
                        args: [1.0],
                        msg: "Le prix doit être supérieur ou égal à 1.",
                    },
                    max: {
                        args: [3.0],
                        msg: "Le prix doit être inférieur ou égal à 3.",
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