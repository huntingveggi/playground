(function(module) {
  "use strict";

  var fs = require('fs');

  var _basePath = "./../config";
  var readFile = function (configName) {
    console.log('Read '+_basePath + '/' + configName + '.json');
    return JSON.parse(fs.readFileSync(_basePath + '/' + configName + '.json', 'utf8'));
  }

  module.exports = {
    getEnvProp: function() {
      var configName = process.env.NODE_ENV || 'development';
      return readFile(configName);
    },

    getGlobalProp: function() {
      var configName = 'config';
      return readFile(configName);
    }
  };





  /*module.exports = function (param) {
    _basePath = param;
    return config;
  }*/

}(module));
