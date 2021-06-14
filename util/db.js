const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database:'node-learning',
    password:'Irulin@Maha98'
});

module.exports = pool.promise();