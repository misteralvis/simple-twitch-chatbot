const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'insert_your_username_here',
    password: 'oauth:intert_your_oauth_token_here'
  },
  channels: [
    'specify_the_chat_channel_here'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Initialize timer for response delays
var timevar = new Date().getTime();

// Set a time to delay responding to the same command
var response_delay = 90000

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === '!command') {
    //client.say(target, `!play${num}`);
    currtime=new Date().getTime()
    if (timevar + 90000 < currtime) {
        timevar=currtime
        sleep(10000)
        client.say(target, `Respond to !command here`);
        console.log(`* Executed ${commandName} command`);
    }
    else {
        console.log("Hasn't been 90 seconds... continue to delay further responses")
    }
  } else {
    console.log(`* Unknown command ${commandName}`);
  }
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
