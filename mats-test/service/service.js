var request = require('request');
var apiUrl = "http://10.11.100.53:10110/trackingws/vorgaenge/";
exports.show = function(req, res) {
  //http://localhost:8888/show/?vorgang=123
  var vnr = req.query.vorgang;
  var msg = request
        .get(apiUrl + vnr)
        .auth('', '', false);
  console.log("Request for Vorgang-ID "+msg.id);
  msg.pipe(res);
}

exports.test = function(req, res) {
  res.send('Hello Test!');
}
