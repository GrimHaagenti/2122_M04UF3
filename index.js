#!/usr/bin/node

 
let http = require("http");

let fs = require("fs");


let http_server = http.createServer(function(req, res) {
 	
	
	
	if (req.url == "/"){

	fs.readFile("index.html", function(err, data){
		if (err)
		{console.log("ERROR!!");
		return;}

		res.writeHead(200);		
		res.end(data);
	})
	

}else{
	let split_input;

	split_input = req.url.split("/");

	console.log(split_input);	
	fs.readFile( split_input[1] , function(err,data)
		{
		res.writeHead(200);		
		res.end(data);
		})
	}
	
	
}).listen(4500);
		 
