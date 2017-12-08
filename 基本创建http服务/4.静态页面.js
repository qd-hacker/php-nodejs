const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer();
server.on('request',(req,res) => {
   const url = req.url;
   const method = req.method.toLowerCase();
   if(method==="get"&&url==="/views/index.html"){
    //    fs.readFile(path.join(__dirname,url),(err,data)=>{
    //        if(err) return res.end('404.');
    //         res.end(data)
    //    });
    readfile(url,res);
       
   }else if(method==="get"&&url==="/views/movie.html"){
    //    fs.readFile(path.join(__dirname,url),(err,data)=>{
    //        if(err) return res.end('404.');
    //         res.end(data)
    //    });
    readfile(url,res)
   }else if(method==="get"&&url==="/views/about.html"){
      readfile(url,res);
   }else if(method==="get"&&url==="/assets/css/index.css"){
      readfile(url,res);
   }else if(method==="get"&&url==="/assets/js/index.js"){
      readfile(url,res);
   }
})

server.listen(3000,function(){
    console.log('http running at http://127.0.0.1:3000');
})
function readfile(url,res){
 fs.readFile(path.join(__dirname,url),(err,data)=>{
           if(err) return res.end('404.');
            res.end(data)
       });
}