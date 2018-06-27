var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'*****',
    database:'Items'
});
connection.connect();

var article = {
    author: 'Amber gautam',
    title: 'Python Developer',
    body: 'Amber gautam is a Python developer'
};

// Insert Into 
var query = connection.query('insert into items set ?', article, function(err, result){
   if(err){
       console.error(err);
       return;
   }
   console.error(result);
})