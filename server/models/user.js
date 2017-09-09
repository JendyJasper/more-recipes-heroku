export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password:{
     type: DataTypes.STRING,
     allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
      User.associate = (models) => {
        // associations can be defined here
        User.hasMany(models.Recipe, {
          foreignKey: {
            name: 'userId',
            key: 'id',
          },
        });
     };
  return User;
};
