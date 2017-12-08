const http = require('http');
const server = http.createServer();
server.on('request',(req,res) =>{
    res.writeHeader(200,{
        "Content-Type": 'text/html; charset=utf-8' 
    })
    res.end('请求的地址'+req.url+'请求的方法'+req.method);
})
server.listen(3000,function(){
    console.log('http server running at http://127.0.0.1:3000');
})