(function(module) {
  "use strict";

  var propReader = require('./propertiesReader.js');

  var gConf = propReader.getGlobalProp();
  console.log(JSON.stringify(gConf,null,' '));


}(module));
