const http = require('http');
const firstserver = http.createServer(function(userreq,serverres){
    serverres.end("Hello User!!")
});
firstserver.listen(5000,
    function(){
        console.log("Server is running")
    });