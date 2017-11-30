'use strict';

module.exports = (sequelize, DataTypes) => {
  var situations = sequelize.define('situations', {
    intentName: DataTypes.STRING,
    utterance: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return situations;
};
