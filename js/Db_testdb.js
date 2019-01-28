import { createConnection } from 'mysql';

var con = createConnection({
  host: "localhost",
  user: "mysqluser",
  password: "mysqlpassword",
  database: "mydb"
});

function searchresult(theForm, con){
    var searchresult = theFrom.search_input.value
    var sql = 'SELECT `*` FROM `kontraktsnr` WHERE `idkontraktsnr` LIKE `"%"?"%" or `kundnamn` LIKE `"%"?"%"';
    con.query(sql, [searchresult, searchresult], function (err, result) {
    if (err) throw err;
    document.getElementById(msg1).innerHTML=result;
    });
};