var Book = require('../models/bookModel');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/bookAPI');


var books = [
 new Book({
    title :'A journey into the center of the earth',
    author : 'jules verne',
    genre : 'Science Fiction',
    read:false
}),
new Book({
     title :'Alice aux pays des merveilles',
    author : 'khalil ben aissa',
    genre : 'Science Fiction',
    read:false
}),
new Book({
     title :'le vrai HANDBALL',
    author : 'Hachmi Razgallah',
    genre : 'Sport',
    read:false
}),
new Book({
     title :'Childhood',
    author : 'Lev Tolstoy',
    genre : 'Biography',
    read:false
}),
new Book({
    title :'Life of the mississippi',
    author : 'Mark Twain',
    genre : 'History',
    read:false
})

];


var done = 0;
for(var i=0;i<books.length;i++){
    books[i].save(function(err,result){
        done++;
        if (done === books.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
