  (function() {
    "use strict";

    var express      = require("express");
    var proxyRouter = require('./router-proxy.js');
    var bodyParser = require('body-parser');

    var app = express();
    app.use(bodyParser.json());

    app.use('/',proxyRouter);

    var server = app.listen(8881, function() {
        console.log('JsonXmlProxy listening on port %d', server.address().port);
    });

  }());
