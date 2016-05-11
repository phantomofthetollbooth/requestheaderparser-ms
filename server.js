var express = require('express');
var path = require('path');


var app = express();


app.set('port', process.env.PORT || 3000);

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get("/api/whoami", function(req, res) {
//res.sendFile(path.join(__dirname, '/public', 'index.html'));
var language = req.headers.accept-language.substring(0,accept-language.indexOf(','));
  //var lang = langList.substring(0, langList.indexOf(','));
  var response={
	  language: language
  }
  res.json(response);
});


app.listen(app.get('port'));