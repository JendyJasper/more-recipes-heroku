export default (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
       allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
       allowNull: false
    },
  }); 

    Review.associate = (models) => {
      // associations can be defined here

      Review.belongsTo(models.Recipe, {
        foreignKey: {
          name: 'recipeId',
          key: 'id'
        },
      }),
      Review.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          key: 'id'
        },
      })      
  };
  return Review;
};
