const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'test_api'
});

connection.connect( (err) => {
    if(err) throw err;
    console.log('Estas conectado a la base de datos');
});

let query_insert = "insert into user values ('hugone3', 'hugo1234')";
/*connection.query(query_insert, (err, results, fields) => {
    if(err) throw err;
    console.log('Resultado de insert: ', results);
});*/

let query_update = "update user set password='nuevo123' where username='hugone'";
connection.query(query_update, (err, results, fields) => {
    if(err) throw err;
    console.log('Resultado de update: ', results);
});

let query_delete = "delete from user where username='hugone3'";
/*connection.query(query_delete, (err, results, field) => {
    if(err) throw err;
    console.log('Resultado de delete: ', results);
});*/

let query_select = "select * from user";
connection.query(query_select, (err, results, fields) => {
    if(err) throw err;
    console.log('Resultado de select: ', results);
});


