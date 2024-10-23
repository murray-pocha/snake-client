const net = require("net");
const { IP, PORT } = require('./constants');


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT

  });

  conn.on('connect', () => {
    console.log('Connected, Welcome to the server!');
    conn.write('Name: MDP');

  });

  conn.on('data', (data) => {
    console.log(data);

  });

  conn.setEncoding("utf8");

  return conn;

};


module.exports = connect;