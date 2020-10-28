const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan');
const createRoutes = require('./routes');
var app = express();

const port = process.env.PORT || 2999


app.use(logger('dev'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

createRoutes(app);

//Allows use to use react-router on frontend
//sends all non defined paths to the index
app.get('*', (req,res) =>{
  res.sendFile(path.join(path.join(__dirname, 'public/index.html')));
})

app.listen(port, ()=>{
  console.log(`Sever started sucessfully! ${port}`);
})
