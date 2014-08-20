var request = require('request');
var apiUrl = "http://localhost:8881/convert/";

exports.import = function(req, res) {
  //http://localhost:8882/import/
  var sendBody = {
    "@": {
      "type": "individual"
    },
    "firstName": "John",
    "lastName": "Smith",
    "dateOfBirth": new Date(1964, 7, 26),
    "address": {
        "@": {
            "type": "home"
        },
        "streetAddress": "3212 22nd St",
        "city": "Chicago",
        "state": "Illinois",
        "zip": 10000
    },
    "phone": [
        {
            "@": {
                "type": "home"
            },
            "#": "123-555-4567"
        },
        {
            "@": {
                "type": "cell"
            },
            "#": "456-555-7890"
        }
    ],
    "email": function() {return "john@smith.com";},
    "notes": "John's profile is not complete."
  };


  var msg = request
        .post(apiUrl, sendBody, function (err, response, body) {
          if (err) throw err;
          console.log(response.headers);
          console.log(body);

        })
        .auth('printservice', 'serviceprint', false);
  //msg.pipe(res);
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
