const connect = require('./client');
const setupInput = require('./input.js');

console.log('Connecting ...');
const conn = connect();


setupInput(conn);