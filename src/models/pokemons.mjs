// Anthony Vuagniaux
// Date 17.01.25

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
                    msg:"Ce nom est déjà pris"
                },
                notEmpty: {
                    msg: "Le nom ne peut pas être vide."
                },
                notNull: {
                    msg: "Le nom est obligatoire."
                }


            },
            dimensionId: {
                type: DataTypes.INTEGER,
                notEmpty: {
                    msg: "La dimmension ne peut pas être vide"
                },
                notNull: {
                    msg: "La dimmension est obligatoire"
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