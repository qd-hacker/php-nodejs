// const fs = require('fs')
// const path = require('path')
// const abspsth = path.join( __dirname,'成绩.txt')
// const sspsth = path.join( __dirname,'成绩格式化.txt')
// fs.readFile(abspsth,'utf-8',(err,dataStr) =>{
//     if(err) return console.log('读取失败：' +err.message)
//     const Str = dataStr.split("    ").join("\n").split("=").join(":");
//     fs.writeFile(sspsth,Str,(err) => {
//     if(err) return console.log('写入失败：' +err.message)
//     console.log('恭喜，复制成功')
//     })
//     console.log(Str)

// })
const fs = require('fs');
const path = require('path');
const readPath = path.join(__dirname,'成绩.txt');
const writePath =path.join(__dirname,'成绩单.txt');
fs.readFile(readPath,'utf-8',(err,dataStr)=>{
    if(err) return console.log('读取失败:'+'err.message');
    dataStrArr = dataStr.split(' ');
    let strl = '';
    dataStrArr.forEach((item,i)=>{
       if(item.length > 0){
        const str = item.split('=');
        strl += str[0]+ ":" +str[1]+'\n';
       }
    })
    // console.log(strl.trim())
fs.writeFile(writePath,strl.trim(),(err) =>{
    if(err) return console.log("写入错误！");
    console.log("成功写入！");
})

})
 