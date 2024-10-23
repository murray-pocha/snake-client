let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on('data', handleUserInput); // listens to the users input (registered by the .on)
  return stdin;   // return the stdin object so we can use it elsewhere in the program
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