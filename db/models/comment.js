'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: {
      type: DataTypes.STRING(100),
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
  Comment.associate = function(models) {
    Comment.belongsTo(models.Photo,       { foreignKey: 'photoId'}),
    Comment.belongsTo(models.User,        { foreignKey: 'userId' }),
    Comment.hasMany(models.CommentLike,   { foreignKey: 'commentId' })
  };
  return Comment;
};
