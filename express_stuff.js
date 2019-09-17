var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.send('Welcome to the tutorials!');
});

app.route('/Node').get(function(req,res){
	res.send('tutorial on node');
});

app.route('/Angular').get(function(req,res) {
	res.send('tutorial on Angular');
})


var server = app.listen(3000, function () {

})
