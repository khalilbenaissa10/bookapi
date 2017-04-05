var express = require('express'),
mongoose = require('mongoose');
bodyParser = require('body-parser');

var db;
if (process.env.ENV =='Test') 
    db =  mongoose.connect('mongodb://localhost/bookAPI_test');
else {
     db =  mongoose.connect('mongodb://localhost/bookAPI');
}
var Book = require('./models/bookModel');

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var port = process.env.port || 3000 ;

bookRouter = require('./Routes/bookRoutes')(Book);





app.use('/api/Books',bookRouter);
//app.use('/api/authors',authorRouter);

app.get('/',function(req,res){
    res.send('hello to API BOOK !!!'); 
});

app.listen(port,function(){
    console.log('GULP is running my app  on PORT:'+port);
});

module.exports = app ;