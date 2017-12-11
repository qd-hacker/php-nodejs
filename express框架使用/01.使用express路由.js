// 引入模板
const express = require('express');
// 创建服务器
const app =express();
//导入路由
const router = require('./02.01的路由.js');
//注册路由
app.use(router);
//处理请求
// app.get('/',(req,res)=>{
//     res.send('首页')
// });
// app.get('/movie',(req,res)=>{
//     res.send('电影')
// })
//监听
app.listen(3000,()=>{
  console.log('http://127.0.0.1:3000')
})