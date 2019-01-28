var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "mysqluser",
  password: "mysqlpassword",
  database: "mydb"
});

function searchresult(theForm, con){
    var searchresult1 = theForm.search_input.value;
    var searchresult2 = theForm.search_input.value;
    var sql = 'SELECT `*` FROM `kontraktsnr` WHERE `idkontraktsnr` LIKE `"%"?"%" or `kundnamn` LIKE `"%"?"%"';
    con.query(sql, [searchresult1, searchresult2], function (err, result) {
    if (err) throw err;
    //document.getElementById(msg1).innerHTML=result;
    console.log(result);
    });
};
