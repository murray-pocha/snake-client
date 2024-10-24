const IP = "localhost";
const PORT = 50541;

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


module.exports = {
  IP,
  PORT,
  movementprompts,
  specialMessage
};

