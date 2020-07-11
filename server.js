// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.json());
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors());
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
console.log(__dirname);

// your first API endpoint...
app.get("/api/timestamp/:date_string?", function(req, res) {
  //res.json({ greeting: "hello API" });
  //res.json({ greeting: "hello API" });
  let dateval = req.params.date_string;
  console.log(dateval);
  /*var dateFormattingOption = {
    year : 'numeric',
    month : 'long',
    day : 'numeric'
  }*/
  /*if(datestring == "")
    {
      res.json({ greeting: "nothing given" });
    }
  else
    {
      res.json({ greeting: req.params.date_string });
    }*/
  if(/\d{5}/.test(dateval))
    {
   var  dateInt = parseInt(dateval);
      res.json({ unix : dateval, utc : new Date(dateInt).toUTCString() });
    }
  let dateObject = new Date(dateval);
  if(dateObject.toString() === "Invalid Date")
    {
      let currdate = 
  res.json({ unix : dateObject.valueOf(), utc : dateObject.toUTCString() });
    }
  else
    {
  res.json({ unix : dateObject.valueOf(), utc : dateObject.toUTCString() });
    }

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
