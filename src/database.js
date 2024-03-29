const mysql = require('mysql');
const { promisify } = require('util');
const { database } = require('./key');
const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err){

        if(err.code === 'PROTOCOL_CONNECTION_LOST') console.error('DATABASE CONNETION WAS IS CLOSED');

        if(err.code === 'ER_CON_COUNT_ERROR') console.error('DATABASE HAS TO MAY CONNECTIONS');

        if(err.code === 'ECONNREFUSED') console.error('DATABASE CONNECTION WAS REFUSED');

    }

    if(connection) connection.release();
    console.log('DB is connected');

    return;
});

//Promisify  pool querys
promisify(pool.query);

module.exports = pool;

