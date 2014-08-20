var request = require('request');
var apiUrl = "http://10.11.100.53:10110/trackingws/vorgaenge/";
var apiUrl2 = "http://10.11.100.53:10110/trackingws/vorgaenge_masch_dok/";
exports.show = function(req, res) {
  //http://localhost:8888/show/?vorgang=123
  var vnr = req.query.vorgang;
  var msg = request
        .get(apiUrl + vnr)
        .auth('', '', false);
  console.log("Request for Vorgang-ID "+msg.id);
  msg.pipe(res);
}

exports.do = function(req, res) {
  //http://localhost:8888/do/
  var vnr = req.query.vorgang;
  var msg = request
        .post(apiUrl2, function (err, response, body) {
          if (err) throw err;
          console.log("Request for Vorgang-ID "+msg.id);
          console.log(response.headers);
          console.log(body);

        })
        .auth('printservice', 'serviceprint', false);
  msg.pipe(res);
}

exports.test = function(req, res) {
  res.send('Hello Test!');
}

/*request
      .post(apiUrl2, function (err, response, body) {
        if (err) throw err;
        console.log(response.headers);
        console.log(body);

      })
      .auth('printservice', 'serviceprint', false)
      .json();*/
