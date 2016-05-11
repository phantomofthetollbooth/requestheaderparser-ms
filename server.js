var express = require('express');
var path = require('path');
var requestIp = require('request-ip');

var app = express();


app.set('port', process.env.PORT || 3000);

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.get("/api/whoami", function(req, res) {
var ip = requestIp.getClientIp(req); 
var languageString = req.headers["accept-language"];
if(languageString.indexOf(',')!=-1){
  var lang = languageString.substring(0, languageString.indexOf(','));
}else{
	var lang = languageString;
}
   var userAgent = req.headers["user-agent"]
  var software = userAgent.substring(userAgent.indexOf('(')+1, userAgent.indexOf(')'))
  var response={
	  ip:ip,
	  language: lang,
	  software: software
  }
  res.json(response);
});


app.listen(app.get('port'));