  (function(module) {
    "use strict";

    var request       = require('request');
    var express       = require('express');
    var js2xmlparser  = require('js2xmlparser');
    var xml2jsparser  = require('xml2js').Parser();
    var str = require('string');

    var router = express.Router();

    //Welcome-msg for Dummies
    router.get('/', function (req, res, next) {
      var ct = req.get('Content-Type');
      if (ct) {
        ct = ct.toLowerCase();
        console.log(ct);
        if (str(ct).contains('application/json')) {
          res.send('Hey JSON, u made it to the JSON-XML-Proxy... Use /convert/to/xml/ to talk to a XML Service!');
        } else if (str(ct).contains('application/xml')) {
          res.send('Hey XML, u made it to the JSON-XML-Proxy... Use /convert/to/json/ to talk to a JSON Service!');
        }
      } else {
        res.send('Hey u, u made it to the JSON-XML-Proxy... No idea what u want! Use /convert/to/xml/ to talk to a XML Service! (ContentType: application/json) Use /convert/to/json/ to talk to a JSON Service! (ContentType: application/json)');
      }
    });


    router.post('/convert/to/xml', function (req, res, next) {

        //Check right Content-Type
        var ct = req.get('Content-Type').toLowerCase();
        if (!str(ct).contains('application/json')) {
          res.status(415).end('Hier wird JSON benötigt!');
          return;
        }

        /* Unpacking input JSON and send as XML
         *{
         *  "xmlRoot": "root",
         *  "url": "http://www.domain.tld/api/",
         *  "body": {
         *    "name":"Name",
         *    ...
         *  }
         *}
         *   ... becomes ...
         *<root>
         *  <name>Name</name>
         *  ...
         *</root>
         *  ...sent to http://www.domain.tld/api/ !!
        */
        var target  = req.body.url;
        var xmlRoot = req.body.xmlRoot;
        var authUsr = req.body.authUsr;
        var authPw  = req.body.authPw;
        delete req.body.url;
        var convertedInput = js2xmlparser(xmlRoot, req.body.body);

        //Forward XML to Service
        var options = {
          url: target,
          headers :{
            "Content-Type":"application/xml",
            "Accept":"application/xml"
          }
        };
        request.post(options, function (err2,res2,convertedInput) {
          if (err2 || res2.statusCode == 200) {
            throw new Error('Service under ... answered with statuscode '+res2.statusCode+'. Message: '+err2);
          }
          var result = res2.body;
          console.log("Response from service:" +result);
          xml2jsparser.parseString(result, function (xjerr, xjresult) {
              if (xjerr) {
                throw new Error('Conversion error in response from Server: '+xjerr);
              }
              console.dir(xjresult);
              console.log('Done');
          });

          res.end(result);
        }).auth(authUsr, authPw, false);


        //Content-Negotiation for response to client
        res.format({
          "text/plain": function () {
            res.send('Debug as "text/plain". Use "application/xml" in HTTP-Accept parameter for pure XML. ' + JSON.stringify(req.body,null,' '));
          } ,
          'application/xml': function(){
            res.set('Content-Type','application/xml');
            //res.end(result);
          }

        });

        //res.end(result);

        //console.log(req.headers);

    });

    module.exports = router;
    // module.exports = function (param) {
    //   _myParam = param;
    //   return router;
    // }


  }(module));
