/*
  Auteur: Vikki dolt
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
                unique: {
                    msg: "Ce nom est déjà pris."
                },
                validate: {
                    is: {
                        args: /^[A-Za-zéè]*$/,
                        msg: "Seules les lettres, le é et le è sont autorisées.",
                    },
                    notEmpty: {
                        msg: "Le nom ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "Le nom est une propriété obligatoire.",
                    },
                },
            },
            dimensionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "La dimension ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "La dimension est une propriété obligatoire.",
                    },
                    min: {
                        args: [1.0],
                        msg: "L'id de la dimension doit être supérieur à 1",
                    },
                    max: {
                        args: [3],
                        msg: "L'id de la dimension doit être inférieur à 3",
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