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
                        // contraint de charactére sont dans les []. A-Z veut dire de A majuscule à Z majuscule. a-z veut dire la meme chose mais minuscule
                        // \s veut dire autorisé les espaces
                        args: /^[A-Za-z\séè]*$/,
                        msg: "Seules les lettres et les espaces sont autorisées.",
                    },
                }
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