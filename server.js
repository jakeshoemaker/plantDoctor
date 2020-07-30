// create express app
const express = require('express')
const app = express()

// server port
const PORT = 1234

// start server
app.listen(PORT, () => {
    console.log("server listening on port: {}", PORT);
});

// Root Endpoint
app.get("/", (req, res, next) => {
    res.json({"message": "Ok"})
});

// other endpoints here

// default response to other requests
app.use(function(req, res){
    res.status(404);
});
