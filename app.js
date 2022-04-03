const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
var mysql = require('mysql');


const app = express();

app.use(cors());
// parse application/json
app.use(bodyParser.json());

//create database connection

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'st_react'
});
//connect to database
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected...');
});


//add new user

app.get('/data', function (req, res) {
    conn.query('SELECT * FROM react_table', [],
        function (err, result) {
            var jsonString = JSON.stringify(result);
            res.send(jsonString);
        })
})


app.delete("/todo/delete/:id", function (req, res) {
    conn.query("delete from react_table where id = ?",
        [req.params.id],
        function (err, rows) {
            res.send("#" + req.params.id + " deleted");
        }
    )
})



app.post("/create", function (req, res) {
    conn.query("insert into react_table (name, calories,carbs,fat,protein) values (?,?, ?, ?, ?)",
        [req.body.createname, req.body.createcalories, req.body.createfat, req.body.createcarbs, req.body.createprotein],
        function (err, rows) {
            res.send(JSON.stringify(req.body));
        }
    )

})



app.get("/put/:id", function (req, res) {
    conn.query("select * from react_table where id = ?",
        [req.params.id],
        function (err, rows) {
            res.send(JSON.stringify(rows[0]));
        }
    )
})



app.put("/put", function (req, res) {
// console.log(req.body.createname);
    // console.log(req.body.createcalories);
    // console.log(req.body.createfat);
    // console.log(req.body.createcarbs);
    // console.log(req.body.createprotein);
    // console.log(req.body);
    conn.query("update react_table set name=?, calories=? ,carbs=? ,fat=? , protein=? where id = ?",
        [req.body.createname, req.body.createcalories, req.body.createfat, req.body.createcarbs, req.body.createprotein, req.body.myid],
        function (err, rows) {
            res.send(JSON.stringify(req.body));
        }
    )

})



app.listen(8080, () => {
    console.log("Server running successfully on 8080");
});