let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const movementprompts = {
  'w': 'up',
  'a': 'left',
  's': 'down',
  'd': 'right'
};

const specialMessage = {
  'j': 'Say: Hey, everyone!',
  'k': 'Say: I win!',
  'l': 'Say: ahhhhh, I lost'
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('Exiting program.');
    process.exit();
  }

  const message = specialMessage[key];
  if (message) {
    connection.write(`Say: ${message}`);
  }

  const direction = movementprompts[key];
  if (direction) {
    connection.write(`Move: ${direction}`);
  }
};


module.exports = setupInput;