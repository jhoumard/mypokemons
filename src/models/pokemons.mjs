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
                      args: /^[A-Za-z\s]*$/,
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