var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

goodResponses = ["You Rock!!", "You are the very best!!", "I wish I was as cool as you!!"];
badResponses = ["You definitely don't Rock!!", "You are the very worst!!", "I wish I didn't know you!!"];

function handleRequest1(request,response) {
    index = Math.floor(Math.random() * ((goodResponses.length - 1) - 0 + 1)) + 0
    response.end("<H1>" + goodResponses[index] + "</H1>");    
}

function handleRequest2(request,response) {
    index = Math.floor(Math.random() * ((badResponses.length - 1) - 0 + 1)) + 0
    console.log(index);
    response.end("<H1>" + badResponses[index] + "</H1>");    
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);






server1.listen(PORT1, function(){
    console.log("server listening on http://localhost:" + PORT1)
})


server2.listen(PORT2, function(){
    console.log("server listening on http://localhost:" + PORT2)
})