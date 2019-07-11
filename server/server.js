const express = require('express')
// 引入库
const mongoose = require('mongoose')
// 链接mongo
const DB_URL = 'mongodb://localhost:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('mongo connect success')
})
// 类似于mysql的表 mongo有文档的概念
const User = mongoose.model('user',new mongoose.Schema({
  user:{type:String,require:true},
  age:{type:Number,require:true}
}))
// --新建数据的操作
// User.create({
//   user:'维他奶',
//   age:20
// },function(err,doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })

// --更新数据的操作
// User.update({'user':'维他奶'},{'$set':{age:26}},function(err,doc){
//   console.log(doc)
// })

// --删除数据的操作
// User.remove({age:18},function(err,doc){
//   console.log(doc)
// })

// 新建app
const app = express()

app.get('/',function(req,res){
  res.send('<h1>Hello!!</h1>')
})
app.get('/data',function(req,res){
  User.find({},function(err,doc){
    // find查找 findOne只查找一条就返回
    res.json(doc)
  })
  // res.json({name:'imooc',type:'IT'})
})
app.listen(9093,function(){
  console.log('start at port 9093')
})