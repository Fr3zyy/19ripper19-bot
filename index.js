const { PermissionsBitField, EmbedBuilder, ButtonStyle, ActivityType , Client, GatewayIntentBits, ChannelType, Partials, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const kadrxydb = require("croxydb")
const client = new Client({
    intents: INTENTS,
    allowedMentions: {
        parse: ["users"]
    },
    partials: PARTIALS,
    retryLimit: 3
});

global.client = client;
client.commands = (global.commands = []);


// DURUM KISMI

client.on("ready",async () => {
	
    client.user.setPresence({
        activities: [{ name: `twitch.tv/19ripper19`, type: ActivityType.Watching }],
        status: 'dnd',
      });


      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Aktif Kullanıcı    : ${client.users.cache.size}`);
	  console.log (`Toplam Kullanıcı   : ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`);
      console.log (`Durum              : Bot Aktif`);
	  console.log (`Sahip              : Fr3zyy#5009 | Fr3zyy`);
      console.log ('_________________________________________');
    
    });

const { readdirSync } = require("fs")
const { TOKEN } = require("./config.json");
const { Modal } = require("discord-modals");
readdirSync('./commands').forEach(f => {
    if (!f.endsWith(".js")) return;

    const props = require(`./commands/${f}`);

    client.commands.push({
        name: props.name.toLowerCase(),
        description: props.description,
        options: props.options,
        dm_permission: props.dm_permission,
        type: 1
    });


});
readdirSync('./events').forEach(e => {

    const eve = require(`./events/${e}`);
    const name = e.split(".")[0];

    client.on(name, (...args) => {
        eve(client, ...args)
    });
});


client.login(TOKEN)