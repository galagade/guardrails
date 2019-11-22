'use strict';
module.exports = (sequelize, DataTypes) => {
  var Report = sequelize.define('Report', {
     id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false
    },
    repositoryName: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false
    },
    findings: {
      allowNull: false,
      type: DataTypes.TEXT,
      get: function(){
        return JSON.parse(this.getDataValue('findings'));
      },
      unique: false
    },
    queuedAt: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false
    },
    scanningAt: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false
    },
    finishedAt: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: false
    },

  },
  {
    timestamps: true
  })


  return Report;
};
