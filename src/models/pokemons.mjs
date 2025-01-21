/**
 * Nom : Thanavine Le Cocq
 * Date : 17.01.2025
 **/

// https://sequelize.org/docs/v7/models/data-types/

// 4. Ajouter des règles de validations pour le modèle pokemon.
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
                        args: /^[A-Za-zéè]*$/,
                        msg: "Seules les lettres sont autorisées.",
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
                validate: {
                    is: {
                        args: /^[1-3]*$/,
                        msg: "Seules les lettres et les espaces sont autorisées.",
                    },
                    notEmpty: {
                        msg: "La dimension ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "La dimension est une propriété obligatoire.",
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