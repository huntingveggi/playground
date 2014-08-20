var express = require("express");
var app     = express();
var service = require('./service.js');

var server = app.listen(8882, function() {
    console.log('Importer listening on port %d', server.address().port);
});
app.get('/', function(req, res){
    res.send('Hey client, you made it to the home page of the fabulous JSON-Importer... From now on please use POST!')
  });
app.get('/import', service.import);
