const { Client, EmbedBuilder } = require("discord.js");
const moment = require("moment");
  require("moment-duration-format");
  const os = require("os");
module.exports = {
  name: "istatistik",
  description: "Botun İstatistiğini Gösterir!",
  type: 1,
  options: [],

  run: async(client, interaction) => {
    const Uptime = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new EmbedBuilder()
	.setColor("Random")
    .setAuthor({name:interaction.client.user.tag,iconURL:interaction.member.user.avatarURL({dynamic:true})})
	.setThumbnail('https://cdn.discordapp.com/avatars/1093248613066481674/db39788a1b3aea7be899a47141e553ff.webp?size=1024')
    .addFields({ name: '<a:amogus:1005203035909267587> Bot Sahibi', value: `Ripper#4049`, inline: false})
	.addFields({ name: '<a:amogus:1005203035909267587> Developer', value: `Fr3zyy#5009`, inline: false})
    .addFields({ name: '<a:amogus:1005203035909267587> Bellek Kullanımı', value: `${(process.memoryUsage().heapUsed /1024 /512).toFixed(2)}MB`, inline: true})
    .addFields({ name: '<a:amogus:1005203035909267587> Çalışma Süresi', value: `${Uptime}`, inline: true})
    .addFields({ name: '<a:amogus:1005203035909267587> Aktif Kullanıcı', value: `${client.users.cache.size}`, inline: false})
    .addFields({ name: '<a:amogus:1005203035909267587> Toplam Kullanıcı', value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, inline: false})	
    .addFields({ name: '<a:amogus:1005203035909267587> Sunucular', value: `${client.guilds.cache.size}`, inline: true})
    .addFields({ name: '<a:amogus:1005203035909267587> Kanallar', value: `${client.channels.cache.size}`, inline: true})
    .addFields({ name: '<a:amogus:1005203035909267587> İşletim Sistemi', value: `Windows 11 Pro 64 Bit`, inline: false})
    .addFields({ name: '<a:amogus:1005203035909267587> İşlemci', value: `${os.cpus().map(i => `${i.model}`)[0]}`, inline: false})
    .addFields({ name: '<a:amogus:1005203035909267587>  Discord.JS sürüm', value: `14.3.0`, inline: true})
    .addFields({ name: '<a:amogus:1005203035909267587>  Node.JS sürüm', value: `v16.14.2`, inline: true})
    .addFields({ name: '<a:amogus:1005203035909267587> Bot Kuruluş', value: `26.02.2022`, inline: false})
    .addFields({ name: '<a:amogus:1005203035909267587> Komut Sayısı', value: `6`, inline: true})
    .addFields({ name: '<a:amogus:1005203035909267587> Ping', value: `${client.ws.ping}`, inline: true})
	.setTimestamp()
	.setFooter({text:interaction.client.user.tag, iconURL:interaction.member.user.avatarURL({dynamic:true})})
    interaction.reply({embeds: [embed], ephemeral: true })

  }

};