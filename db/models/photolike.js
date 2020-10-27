'use strict';
module.exports = (sequelize, DataTypes) => {
  const PhotoLike = sequelize.define('PhotoLike', {
    like: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    photoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  PhotoLike.associate = function(models) {
    PhotoLike.belongsTo(models.User,     { foreignKey: 'userId' }),
    PhotoLike.belongsTo(models.Photo,    { foreignKey: 'photoId' })

  };
  return PhotoLike;
};
