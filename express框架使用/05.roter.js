const express = require('express');
// const querystring = require('querystring')
const roter = express.Router();
roter.get('/index.html',(req,res)=>{
    res.send("首页");
})
roter.get('/movie.html',(req,res)=>{
    res.send("电影");
})
roter.post('/api/postinfo',(req,res)=>{
    console.log(req.body)
  res.send('你提交的数据是： ' + JSON.stringify(req.body))
})
module.exports = roter;