'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    title: DataTypes.STRING,
    github_repo_link: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {});
  project.associate = function(models) {
    // associations can be defined here
    project.hasMany(models.research, {
      delete: 'CASCADE',
      foreignKey: 'project_id'
    })
  };
  return project;
};