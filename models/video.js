'use strict';
module.exports = (sequelize, DataTypes) => {
  const video = sequelize.define('video', {
    title: DataTypes.STRING,
    s3_path: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    video_type: DataTypes.STRING
  }, {});
  video.associate = function(models) {
    // associations can be defined here
  };
  return video;
};