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
                        args: /^[A-Za-z/éè]*$/,
                        msg: "Seules les lettres et les 'é' + 'è' sont autorisées.",
                    },
                    notEmpty: {
                        msg:  "Le nom ne peut pas être vide.",
                    },
                    notNull: {
                        msg: "Le nom est une propriété obligatoire.",
                    },
                },
            },
            dimensionId: {
                type: DataTypes.INTEGER,
                validate: {
                    min: {
                        args: [1.0],
                        msg: "La dimension doit être égale ou superieure à 1.",
                    },
                    max: {
                        args: [3.0],
                        msg: "La dimension doit être égale ou inferieure à 3.",
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