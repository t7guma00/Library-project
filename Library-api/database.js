var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  user: 'netuser',
  password: 'netpass',
  database: 'library_db'
});
module.exports = connection;