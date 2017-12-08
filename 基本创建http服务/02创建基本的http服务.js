const http = require('http');
// 创建服务器
const server = http.createServer();
server.on('request',(req,res)=>{
    res.end("hello word");
})
server.listen(3000,function(){
    console.log('ok');
})
