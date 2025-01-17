/*
Author: Marco Mascellino
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
                unique:{
                    msg: "le nom du pokemon doit être unique"
                },
                validate: {
                    is: {
                        args: /^[A-Za-zéè\s]*$/,
                        msg:"seuls les lettres (é et è inclus) et les espaces sont autorisés"
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