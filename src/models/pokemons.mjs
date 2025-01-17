//Artur Tudor
//17.01.2025
//fichier: pokemons.mjs
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
                    msg: "Le nom existe déjà."
                },
                validate:{
                    //is:{
                    //    args: /^[A-Za-z\s]*$/,
                    //    msg: "Pas d'espaces ni de lettres dans le nom",
                    //},
                    notEmpty: {
                        msg: "Le nom ne peut pas etre vide.",
                    },
                    notNull: {
                        msg: "Le nom est une propriété obligatoire",
                    },
                },
            },
            dimensionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate:{
                    notEmpty: {
                        msg: "La dimension ne peut pas etre vide.",
                    },
                    notNull: {
                        msg: "La dimension est une propriété obligatoire",
                    },
                    min:{
                        args: [1.0],
                        msg: "La dimention doit etre plus grand que 1"
                    },
                    max:{
                        args:[3.0],
                        msg: "La dimenstion ne peut pas etre plus grand que 3.",
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