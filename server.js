var express = require('express');
var path = require('path');


var app = express();


app.set('port', process.env.PORT || 3000);

app.get("/", function(req, res) {
res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.listen(app.get('port'));