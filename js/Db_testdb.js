var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "mysqluser",
  password: "mysqlpassword",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
