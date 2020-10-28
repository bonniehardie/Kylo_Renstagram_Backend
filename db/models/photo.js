'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caption: {
      type: DataTypes.STRING(100),
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User,       { foreignKey: 'userId' }),
    Photo.hasMany(models.PhotoLike,     { foreignKey: 'photoId' })
    Photo.hasMany(models.Comment,       { foreignKey: 'photoId' })
  };
  return Photo;
};
