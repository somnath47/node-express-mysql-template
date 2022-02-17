const MySQLConnection = function () {

  const mysql = require('mysql');

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Test@123',
    database : 'test_db'
  });

  return connection

}

module.exports = new MySQLConnection()