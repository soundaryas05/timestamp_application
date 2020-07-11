// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
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
  console.log(datestring);
  /*if(datestring == "")
    {
      res.json({ greeting: "nothing given" });
    }
  else
    {
      res.json({ greeting: req.params.date_string });
    }*/
  if(isNaN(dateval))
    {
      var naturalDate = new Date(dateval);
      naturalDate = naturalDate.toLocalString();
      var unixDate = new Date(dateVal).getTime()/1000;
      
    }
  else
    {
      var unixDate = dateval;
      var naturalDate = new Date(dateval * 1000);
      naturalDate = naturalDate
    }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
