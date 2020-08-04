// create express app
const express = require('express')
const app = express()
const db = require('./database.js');
const cors = require('cors');

// server port
const PORT = 1234

// start server
app.use(cors());
app.listen(PORT, () => {
    console.log("server listening on port: {}", PORT);
});

// Root Endpoint
app.get("/", (req, res, next) => {
    res.json({"message": "Ok"})
});

// get latest moisture level
app.get('/api/moisture', (req, res, next) => {
    var sql = "select * from moisture_level order by time desc limit 1";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "data": rows
        })
    });
});

// get last hour of moisture
app.get('/api/moisture/hr', (req, res, next) => {
    var sql = "select * from moisture_level order by time desc limit 4";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

app.get('/api/moisture/6hr', (req, res, next) => {
    var sql = "select * from moisture_level order by time desc limit 24";
    var params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});


// default response to other requests
app.use(function(req, res){
    res.status(404);
});
