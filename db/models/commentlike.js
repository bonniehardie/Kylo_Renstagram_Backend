'use strict';
module.exports = (sequelize, DataTypes) => {
  const CommentLike = sequelize.define('CommentLike', {
    like: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    commentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  CommentLike.associate = function(models) {
    CommentLike.belongsTo(models.User,  { foreignKey: 'userId' }),
    CommentLike.belongsTo(models.Comment,  { foreignKey: 'commentId' })
  };
  return CommentLike;
};
