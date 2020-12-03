const mysql = require('mysql');

const pool_legacy = mysql.createPool({
    connectionLimit: 5,
    host: "blitz.cs.niu.edu",
    user: "student",
    password: "student",
    database: "csci467",
})

const query_legacy = (query, cb) => {
    pool_legacy.getConnection((err, conn) => {
        if (err) {
            cb(false)
            return;
        }
        conn.query(query, (err, results) => {
            conn.release();
            if (!err)
                cb(results);
        });

        conn.on('error', (err) => {
            cb(false)
            return;
        })

    })
}

const pool_new = mysql.createPool({
    connectionLimit: 5,
    host: "192.168.1.150",
    user: "remote",
    password: "password",
    database: "partdb",
})

const query_new = (query, cb) => {
    pool_new.getConnection((err, conn) => {
        if (err) {
            cb(false)
            return;
        }
        conn.query(query, (err, results) => {
            conn.release();
            if (!err)
                cb(results);
            else
                console.log(err)
        });

        conn.on('error', (err) => {
            console.log(err)
            cb(false)
            return;
        })

    })
}

module.exports = {query_legacy, query_new};