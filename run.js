require('dotenv').config();
const fs = require('fs');
const Bot = require('./bot.js');
const Discord = require('discord.js');
const CONFIG_FILE = 'bot.json';


function save(configuration) {
  fs.writeFile(CONFIG_FILE, JSON.stringify(configuration, null, 2), null, (err) => {
    if (err)
      console.error('Error saving configuration');
  });
};

function validateConfig(configuration) {
  if(!configuration.channel){
    console.error('Error: configuration file missing channel ID.');
    return null;
  }
  configuration.guilds = configuration.guilds || {};
  return configuration;
};

fs.readFile(CONFIG_FILE, (err, data) => {
  if (err) {
    console.log('Error: Bad configuration file.');
  } else {
    let configuration = validateConfig(JSON.parse(data));
    if (!configuration)
      return;

    console.log('Configuration loaded');
    // Rewrite the config file to pretty-print handcoded config.
    save(configuration);

    Bot.create(configuration, 
      [Discord.GatewayIntentBits.Guilds,  
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages, 
        Discord.GatewayIntentBits.GuildPresences],
      process.env.CLIENT_TOKEN, /* hooks = */ {
      Discord,
      save, 
    });
  }
});

