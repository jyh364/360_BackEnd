'use strict';
module.exports = (sequelize, DataTypes) => {
  const research = sequelize.define('research', {
    title: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  research.associate = function(models) {
    // associations can be defined here
    research.belongsTo(models.projects, {
      delete: 'CASCADE',
      foreignKey: 'project_id'
    })
  };
  return research;
};