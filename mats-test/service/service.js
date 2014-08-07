var request = require('request');

exports.show = function(req, res) {
  var vnr = req.query.vorgang;
  var msg = request.get('http://www.google.com/'+vnr);
  consol.log(msp);
  msg.pipe(res);
}

exports.test = function(req, res) {
  res.send('Hello Test!');
}
