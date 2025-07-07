// Script to create the 'employee_db' database if it does not exist
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    process.exit(1);
  }
  connection.query('CREATE DATABASE IF NOT EXISTS employee_db', (err) => {
    if (err) {
      console.error('Error creating database:', err.message);
    } else {
      console.log('Database employee_db created or already exists.');
    }
    connection.end();
  });
});
