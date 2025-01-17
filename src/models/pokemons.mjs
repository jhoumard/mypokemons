//Matviy Lyubivyy 
//17.01.25

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
                // verefication de nom unique
                unique: {
                    msg: "Ce nom est déjà pris.",
                },
                // verefication que nom contiernt que de lettres (é et è inclus) et que il est pas vide ou null
                validate: {
                    is: {
                        args: /^[A-Za-zéè\s]*$/,  
                        msg: "Seules les lettres et les espaces sont autorisées.",
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
                // verefication que dimensionId entre 1 et 3
                validate: {
                    min: {
                        args: [1.0],
                        msg: "Le dimension doit être supérieur à 1.",
                    },
                    max: {
                        args: [3.0],
                        msg: "Le dimension doit être inférieur à 3.",
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