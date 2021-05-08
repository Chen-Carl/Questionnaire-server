const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Zoe4412402X',
    database: 'questionnaire'
});

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public/', express.static('./public'));
app.engine('html', require('express-art-template'));

app.get('/submit', (req, res) => {
    console.log(req.query);
    var data = req.query['q'].split(',');
    
    var phone = data.pop();
    data.map((item, index) => {
        return item * 1;
    });

    res.send("successful");

    connection.connect();
    connection.query(`INSERT INTO questionnaire VALUES(0, ${data}, ${phone})`, (error, results, fields) => {
        if (error) {
            throw error;
        }
        console.log('solution: ', results);
    });
    connection.end();
});

app.listen(5000, 'localhost', () => {
    console.log('server running at port 5000 ...');
});