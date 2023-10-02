var sqlite3 = require('sqlite3');

const DBSOURCE = 'db.sqlite3';

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  } else {
    console.log('Connected to sqlite3 database');
    db.run(
      `CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            productName text, 
            description text,
            category text,
            brand text,
            expiredDate text,
            manufacturedDate text,
            batchNumber INTEGER,
            unitPrice INTEGER,
            quantity INTEGER,
            createdDate text
            )`,
      (err) => {
        if (err) {
          console.log('Error creating table: ' + err.message);
        }
      }
    );
  }
});

module.exports = db;
