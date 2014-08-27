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
//{"erstellerTeamID":2,"vorgangMATSAdresseID":0,"vorgangaufgrundID":6,"bearbeitungsartID":901,"erstellerID":"mats0001","vorgangstypID":91,"vorgangAdresseID":0,"lagerortID":1,"bearbeiterID":"mats0001","versicherungsobjektID":123,"hinweisID":null,"bearbeiterTeamID":2,"statusID":"erl","mandant":1,"bearbeitungDatum":1162566331000,"eingangdir":"2006-11-06","erledigtDatum":1162566331000,"erstelltDatum":"2006-11-06","prioritaet":1,"vorgangDatum":"03.11.2006","vorgangZeit":"04:05:31.00000","aktionsschutz":null,"enhancedstatus":1,"eingangmd":"2006-11-06","authtyp":null,"vorgangStundeMinute":"04:05","reklamation":"N","id":123,"info":null}
