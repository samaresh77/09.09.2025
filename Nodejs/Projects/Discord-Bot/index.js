const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();
const PORT = 8000;
const app = express();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});
client.once("ready", () => {
  console.log("Bot is online!");
});

client.on("messageCreate", (message) => {
  if (message.content === "!ping") {
    message.channel.send("Pong!");
  }
}); 
client.login(process.env.DISCORD_BOT_TOKEN);

app.get("/", (req, res) => {
  res.send("Discord Bot is running.");
});
app.listen(PORT, () => console.log(`Server is started at PORT: ${PORT}`));