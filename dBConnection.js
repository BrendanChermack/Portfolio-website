const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./SQLite BD/data.db', err => {
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
});
let sql = 'SELECT Email, Password, Country, FirstName, LastName FROM LoginInfo';
db.all(sql, function(err, rows){
    if(err){
        throw err;
    }
    rows.forEach(function(row){
        console.log(row);
    });
});
db.close();
