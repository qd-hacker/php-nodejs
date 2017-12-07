// const fs = require('fs')
// fs.stat('成绩格式化.txt',(err,stats) =>{
//   if(err) return console.log('读取失败')
//   console.log(stats.size);
// })
// const fs = require('fs')
// fs.readdir('hah',(err, files) =>{
//   if(err) return console.log('读取失败')
//   console.log(files);
// })
const fs = require('fs');
const path = require('path');
const readPath = path.join(__dirname);
const writePath = path.join(__dirname,'文件信息列表.txt');
// console.log(readPath)
fs.readdir(readPath,(err,files) =>{
    if(err) return console.log("读取失败");
   let str ="";
   let count = 0;
    files.forEach((item,i) => {
        fs.stat(path.join(__dirname,item),(err,stats) =>{
            count++;
            if(err) return console.log('读取失败');
            str += `文件名称:${item}\n文件大小：${stats.size}字节\n是否文件：${stats.isFile()}\n-----------------\n`;
            let datastr = str;
            if(count===files.length){
             fs.writeFile(writePath,str.trim(),(err)=>{
                 if(err) console.log('写入失败'+err.message);
                 console.log('写入成功')
             })
            }
        })
    })
})