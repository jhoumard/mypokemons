/*
* Auteur : Samuel Gergely
* Date : 17.01.2025
* */

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
                    msg: "Ce nom est déjà pris.",
                },
                validate: {
                    is: {
                        args: /^[A-Za-z\séè]*$/,
                    },
                },
            },
            dimensionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "La dimension doit être renseigné",
                    },
                    notNull: {
                        msg: "La dimension est une propriété obligatoire.",
                    },
                    min: {
                        args: [1.0],
                        msg: "Le numéros de la dimension doit etre superieur ou égale à 1.",
                    },
                    max: {
                        args: [3.0],
                        msg: "Le numéros de la dimension doit être inférieur ou égale à 3.",
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