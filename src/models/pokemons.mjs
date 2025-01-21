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
                // 4. Validation
                validate: {
                    is: {
                        args: /^[A-Za-zéè]*$/,
                        msg: "Seules les lettres (‘é’ ou ‘è‘ inclus) sont autorisées."
                    },
                    notEmpty: {
                        msg: "Le nom ne peut pas être vide."
                    },
                    notNull: {
                        msg: "Le nom est une propriété obligatoire."
                    },
                }
            },
            dimensionId: {
                type: DataTypes.INTEGER,
                // 4. Validation
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "La dimension ID ne peut pas être vide."
                    },
                    min: {
                        args: [1],
                         msg: "Dimension ID: min 1."
                    },
                    max: {
                        args: [3],
                        msg: "Dimension ID: max 3."
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