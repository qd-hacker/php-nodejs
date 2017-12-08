const http = require('http');
const server = http.createServer()
server.on('request',(req,res) =>{
    res.writeHeader(200,{
        "Content-Type": 'text/html; charset=utf-8' 
    })
    res.end('请求的类型是：' + req.method + '请求URL地址：' + req.url)
})
server.listen(3000, () => {
  console.log('http server running at http://127.0.0.1:3000')
})