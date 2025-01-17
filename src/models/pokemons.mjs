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
                        args: /^[A-Za-zéè]*$/,
                        msg: "Seules les lettres et é/è sont accépté.",
                    },
                },
            },
            dimensionId: {
                type: DataTypes.INTEGER,
            },
        },
        "dimension",
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
                        args: /^[1-3]*$/,
                        msg: "seules les dimentsion de 1 à 3 sont accépté.",
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