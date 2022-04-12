const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dongwonsun:sdw1508!%40@cluster0.azzzp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    //useNewUrlParser :true, useUndefinedTopology:true, userCreateIndex:true, userFindAndModify:false
}).then(() => {console.log('MongoDB Connected...')})
  .catch((err) => {console.log(err)})

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})