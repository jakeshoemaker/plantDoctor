const sqlite3 = require('sqlite3').verbose()
const md5 = require('md5')

const DBSOURCE = "sensor-data.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // cant open db
        console.error(err.message)
        throw err
    } else {
        console.log('connected to the database!');
    }
});

module.exports = db
