const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodetest",
});

conn.connect(function (err) {
    if(err){
        console.log(err);
    }
    else{
        console.log("connection created with Mysql successfully");
    }
 });

module.exports = conn;
