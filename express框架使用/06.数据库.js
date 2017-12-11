const mysql = require('mysql');
const con = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'node'
})
// 删除数据，软删除
// const sqlStr = 'update user set isdel=1 where id=1';
// con.query(sqlStr, (err, results) => {
//   console.log(err)
//   console.log(results)
// })
// node 简写法

// const sqlStr = 'update user set age=? where id=?'
// con.query(sqlStr, [18, 4], (err, results) => {
//   console.log(err)
//   console.log(results)
// }) 

// // 插入数据
//  const p1 = {
//   username: '娃哈哈222',
//   age: 30,
//   gender: '男'
// }
// const sqlStr = 'insert into user (username, age, gender) values("' + p1.username + '", ' + p1.age + ', "' + p1.gender + '")'
// con.query(sqlStr, (err, results) => {
//   // 执行失败
//   if (err) return console.log(err)
//   // 执行OK
//   if(results.affectedRows === 1){
//     console.log('写入OK')
//   }else{
//     console.log('写入失败！')
//   }
// }) 
// 简写
// 下面的这条Sql语句，仅限于 在 Node中的 mysql 中使用，PHP 不能这么写
// const sqlStr = 'insert into user set ?'  // ? 表示 占位符，将来，需要使用具体的参数来填充这个问号
// con.query(sqlStr, p1, (err, results) => {
//   console.log(err)
//   console.log(results)
// }) 
// 删除
const sqlStr = 'delete from user where id=?'
con.query(sqlStr,3,(err,result)=>{
  console.log(err);
  console.log(result);
})