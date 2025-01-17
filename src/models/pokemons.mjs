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
                unique: true,
                validate: {
                    is: {
                        args: /^[A-Za-zéè]*$/,
                        msg: "Seules les lettres.",
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
                        msg: "Le nom ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "Le nom est une propriété obligatoire.",
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