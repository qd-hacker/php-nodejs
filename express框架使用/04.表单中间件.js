const express = require('express');
const app = express();

const writeLogs = require('./05.history.js');
app.use(writeLogs);

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))



//导入路由模块
const roter = require('./05.roter.js');
app.use(roter);
app.listen(3000,function(){
  console.log('http://127.0.0.1:3000');   
})