const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log('Welcome to the server!');
    conn.write('Name: MDP');
    //const moveUpInterval = setInterval(() => {
    //conn.write('Move: up');
    //}, 50);


  });

  conn.on('data', (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = connect;