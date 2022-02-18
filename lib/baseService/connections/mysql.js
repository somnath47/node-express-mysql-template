const MySQLConnection = function () {

  const mysql = require('mysql2');

  this.conn = () => {
    const connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'Test@123',
      database : 'tes_db'
    });

    return connection
  }

  this.pool = () => {
    const pool = mysql.createPool({
      host     : 'localhost',
      user     : 'root',
      password : 'Test@123',
      database : 'test_db',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });

    return pool
  }

}

module.exports = new MySQLConnection()