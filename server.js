var express = require('express');
var path = require('path');


var app = express();


app.set('port', process.env.PORT || 3000);

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get("/api/whoami", function(req, res) {
//res.sendFile(path.join(__dirname, '/public', 'index.html'));
var languageString = req.headers.accept-language;
  var lang = languageString.substring(0, languageString.indexOf(','));
  var response={
	  language: lang,
	  car:"dog"
  }
  res.json(response);
});


app.listen(app.get('port'));