/**
 * Auteur: Hugo Rod
 * Date: 17.01.2025
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
                        args: /^[A-Za-z\séè]*$/,
                        msg: "Seules les lettres, les espaces et é et è sont autorisées.",
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
                    min: {
                        args: [1],
                        msg: "L'id de la dimension doit être suprérieur à 1.",
                    },
                    max: {
                        args: [3],
                        msg: "L'id de la dimension doit être inferieur à 3.",
                    },
                    notEmpty: {
                        msg: "L'id de la dimension ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "L'id de la dimension est une propriété obligatoire.",
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