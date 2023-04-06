# gameon
Discord bot to notify when people start playing games.

## Setup

1. Create a `bot.json` file with your [bot's token][0] and the channel ID which you'd notifications in:
```
{
    "token": "<your-token>", 
    "channel": "<your-channel-id>"
}
```
2. Optionally, add the role ID you'd like mentioned in case multiple people are playing the same game at once:
```
{
    "token": "<your-token>", 
    "channel": "<your-channel-id>", 
    "role": "<your-role-id>"
    }
```
3. `yarn install`
4. `node run.js`
5. Invite the bot to your server ([again following this guide][0]), and you are done!

[0]: https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token

## Testing

Run `npm test`.