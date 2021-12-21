const express = require('express');
const path = require('path');

const publicPath = path.resolve(__dirname, './public')

const app = express();

app.use(express.static(publicPath));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './views/home.html'));
});

app.listen(process.env.PORT || 3797, function(){
    console.log('servidor corriendo');
});