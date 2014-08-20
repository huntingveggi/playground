var express = require("express");
var app     = express();
var service = require('./service.js');

var server = app.listen(8888, function() {
    console.log('Listening on port %d', server.address().port);
});
app.get('/', function(req, res){
    res.send('You made it to the home page.')
  });
app.get('/show', service.show);
app.get('/do', service.do);
app.get('/test', service.test);


//http://expressjs.com/guide.html
//https://www.exratione.com/2011/07/running-a-nodejs-server-as-a-service-using-forever/
