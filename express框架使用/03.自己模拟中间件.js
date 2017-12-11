const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
app.use(mylog);
app.get('/index.html',(req,res)=>{
    res.send("首页");
    // write(req);
})
app.get('/movie.html',(req,res)=>{
    // write(req);
    res.send("电影");
})
app.post('/api/aa.html',(req,res)=>{
    res.send("插件");
    // write(req);
})
app.listen(3001,()=>{
    console.log('http://127.0.0.1:3001');
})
// 写入日志
// function write(req){
//     const str = `${req.url} ${req.method} ${new Date().toLocaleString()}\n`;
//     fs.appendFile(path.join(__dirname,'str.txt'),str,(err)=>{
//         if(err) return console.log('写入错误');
//         console.log('ok');
//     })
// }
function mylog(req,res,next){
    const str = `${new Date().toLocaleString()}   ${req.method}   ${req.url}\n`
  fs.appendFile(path.join(__dirname,'str.txt'),str,(err)=>{
        if(err) return console.log('写入错误');
        console.log('ok');
        next();
    })
}
