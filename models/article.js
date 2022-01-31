'use strict';
module.exports = (sequelize, DataTypes) => {
  const article = sequelize.define('article', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    article_type: DataTypes.STRING,
    img_link: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  article.associate = function(models) {
    // associations can be defined here
  };
  return article;
};