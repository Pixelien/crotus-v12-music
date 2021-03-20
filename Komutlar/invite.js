const { LOCALE } = require("../util/CrotusUtil");
const CrotusCode = require('discord.js')
const i18n = require("i18n");

i18n.setLocale(LOCALE);

module.exports = {
  name: "davet",
  aliases: ["d", "botuekle", "invite"],
  description: i18n.__('invite.description'),
  execute(message) {
    const Pixelien = new CrotusCode.MessageEmbed() 
                            
    .setTitle("Crotus Bot Davet")
    .setDescription("[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=" + message.client.user.id + "&permissions=8&scope=bot)")
    .setDescription("__** | **__")
    .setDescription("[Destek Sunucusu Davet Linki](https://discord.gg/ZZDZ4DYk8w)")
    .setColor("#2c2f33")
    return message.member
      .send(Pixelien)
      .catch(console.error);
  }
};
