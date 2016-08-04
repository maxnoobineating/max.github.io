var request = require('request');
var calc = require('./calc.js');
var express = require('express');
var fs = require('fs');

var webPage ={
	html:''
   ,css:''
   ,js:''
   ,img:''
};
var app = express();


fs.readFile('./max.github.io/page1.html','UTF-8',function(err,data){
	if(!err){
		webPage.html=data;
		}
});
fs.readFile('./max.github.io/css.css','UTF-8',function(err,data){
	if(!err){
		webPage.css=data;
		} else console.log(err);
});
fs.readFile('./max.github.io/maxjs.js','UTF-8',function(err,data){
	if(!err){
		webPage.js=data;
		} else console.log(err);
});
fs.readFile('./max.github.io/jpg.jpg',function(err,data){
	if(!err){
		webPage.img=data;
		} else console.log(err);
});

//pp.use('/',express.static(__dirname+'/max.github.io'));

app.get('/',function(req,res){
	res.send(webPage.html);
	//res.end();
});
app.get('/css.css',function(req,res){
	//res.set('Content-Type', 'text/css');
	res.write(webPage.css);
	res.end();
});
app.get('/maxjs.js',function(req,res){
	//res.set('Content-Type', 'text/js');
	res.write(webPage.js);
	res.end();
});
app.get('/maxjs.js',function(req,res){
	res.set('Content-Type', 'image/jpeg');
	res.write(webPage.img);
	res.end();
});
app.get('/in/:x',function(req,res){
	res.json({
		'data1': 3,
		'data2': 'HA!'
	});
});
app.listen(8013,function(err){
	console.log('listening on port 5566');
});