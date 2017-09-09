export default (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    } ,
    details: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
    userId:{
    type: DataTypes.INTEGER,
    allowNull: false
    },
  }); 
    

    Recipe.associate = (models) => {
      // associations can be defined here
      Recipe.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          key: 'id'
        },

      }),
      Recipe.hasMany(models.Review, {
        foreignKey: {
          name: 'recipeId',
          key: 'id'
        },

      }),
      Recipe.hasMany(models.Favourite, {
        foreignKey: {
          name: 'recipeId',
          key: 'id'
        },
      }),
      Recipe.hasMany(models.Vote, {
        foreignKey: {
          name: 'recipeId',
          key: 'id'
        },
      });
    
  };
  return Recipe;
};
