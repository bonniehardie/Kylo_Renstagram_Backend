'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    emailAddress: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    },
    bio: {
      type: DataTypes.STRING(100)
    },
    avatarUrl: {
      type: DataTypes.STRING
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Photo,        { foreignKey: 'userId' }),
    User.hasMany(models.Comment,      { foreignKey: 'userId' }),
    User.hasMany(models.PhotoLike,    { foreignKey: 'userId' }),
    User.hasMany(models.CommentLike,  { foreignKey: 'userId' })
  };
  return User;
};
