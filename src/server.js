const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'hbs')

app.get('',(req, res)=>{
    res.render('index.hbs')
})

app.listen(port,(error, result)=>{
    if(error) console.log(error)
    else console.log("server is up and running on port",port)
})
