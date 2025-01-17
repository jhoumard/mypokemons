/*
Author: Marco Mascellino
Date: 17.01.2025
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
                    msg: "le nom du pokemon doit être unique"
                },
                validate: {
                    is: {
                        args: /^[A-Za-zéè]*$/,
                        msg:"seuls les lettres (é et è inclus)"
                    },
                    notEmpty: {
                        msg: "le nom du pokemon ne peut pas être vide"
                    },
                    notNull: {
                        msg: "le nom du pokemon ne peut pas être nul"
                    },
                }
            },
            dimensionId: {
                type: DataTypes.INTEGER,

                validate: {

                    notEmpty: {
                        msg: "la dimonsion ne peut pas être vide"
                    },
                    notNull: {
                        msg: "la dimonsion ne peut pas être nul"
                    },
                    min: {
                        args: [1],
                        msg: "la dimension doit etre supperieur ou egale a 1"
                    },
                    max: {
                        args: [3],
                        msg: "la dimension doit etre inferieur ou egale a 3"
                    },
                }
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