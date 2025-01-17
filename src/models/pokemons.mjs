// https://sequelize.org/docs/v7/models/data-types/
/*
Chris Brandt
17.01.25
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
                unique: {
                    msg: "Ce nom est déjà pris.",
                },
                validate: {
                    is: {
                        args: /[A-Za-z\s]*/,
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
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "La dimension ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "La dimension est une propriété obligatoire.",
                    },
                    isInt: {
                        msg: "Utilisez uniquement des nombre de 1 à 3.",
                    },
                    min: {
                        args: [1],
                        msg: "La dimension doit être supérieur à 1.",
                    },
                    max: {
                        args: [3],
                        msg: "La dimension doit être inférieur à 3.",
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