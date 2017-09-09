export default (sequelize, DataTypes) => {
  const Favourite = sequelize.define('Favourite', {
    userId: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
    recipeId: {
    type: DataTypes.INTEGER,
    allowNull: false
    },
  }); 
  Favourite.associate = (models) => {
    Favourite.belongsTo(models.Recipe, {
      foreignKey: {
        name: 'recipeId',
        key: 'id'
      },
    }),
    Favourite.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        key: 'id'
      },
    });
  }
  return Favourite;
};
