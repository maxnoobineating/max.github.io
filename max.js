var request = require('request');
var calc = require('./calc.js');
var express = require('express');
var fs = require('fs');

var webPage;
var webPage_css;
var app = express();


/*fs.readFile('./max.github.io/page1.html','UTF-8',function(err,data){
	if(!err){
		webPage=data;
		}
});
fs.readFile('./max.github.io/css.css','UTF-8',function(err,data){
	if(!err){
		webPage_css=data;
		} 
});*/

app.use('/',express.static(__dirname+'/max.github.io'));

/*app.get('/',function(req,res){
	res.send(webPage);
	res.send(webPage_css);
});*/
app.listen(5566,function(err){
	console.log('listening on port 5566');
});