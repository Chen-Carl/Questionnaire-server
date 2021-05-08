const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zoe4412402X',
    database: 'questionnaire'
});
connection.connect();

const data = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, "18300750029"];

connection.query(`INSERT INTO questionnaire VALUES(${data})`, (error, results, fields) => {
    if (error) {
        throw error;
    }
    console.log('solution: ', results);
})

connection.end();
