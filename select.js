var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'*****',
    database:'Items',
    multipleStatements :true
});
connection.connect();

//For drop a table
// var id = '1; drop table articles;';
// connection.query('select * from articles where id = '+ id , function(err, result){
//     console.log(result);
// For Select query 
    var id = '1';
    connection.query('select * from items where id = '+ id , function(err, result){
        console.log(result);


})