export default (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    userId: {
      type: DataTypes.INTEGER,
      required: true,
       allowNull: false
    },
    recipeId: {
      type: DataTypes.INTEGER,
      required: true,
       allowNull: false
    },
    rate: {
      type: DataTypes.INTEGER,
       allowNull: false,
      defaultValue: 0
    },
   });

  Vote.associate = (models) => {
    // associations can be defined here
    Vote.belongsTo(models.User, {
      foreignKey : {
        name: 'userId',
        key: 'id'
      },

    }),
    Vote.belongsTo(models.Recipe, {
      foreignKey: {
        name: 'recipeId',
        key: 'id'
      },

    });

 };
  return Vote;
};
