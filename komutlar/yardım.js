const { MessageEmbed, Client, Message } = require("discord.js");
const settings = require("../Ayarlar/Ayarlar.json");

module.exports.run = async (client, message, args) => {

let yetki = client.commands.filter(c=>c.help.category === 'Yetki').map(command => `\`${command.help.name}\``)
let yetenek = client.commands.filter(c=>c.help.category === 'Yetenek').map(command => `\`${command.help.name}\``)
let staff = client.commands.filter(c=>c.help.category === 'Staff').map(command => `\`${command.help.name}\``)

if (args[0] === "yetki") {

  let yetkiembed = new MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
  .setTitle(`Yetki Yardım Menüsü`)
  .setDescription(`Yetki Yardım Menüsüne hoş geldin,\n
  \`•\` \`yetki ver <seviye> @Kullanıcı\` \n**Etiketlediğiniz kullanıcıya belirttiğiniz seviyedeki yetkiyi verirsiniz.**\n\`•\` \`yetki yükselt <seviye> @Kullanıcı\` \n**Etiketlediğiniz kullanıcıyı belirttiğiniz seviyeye yükseltirsiniz.**\n\`•\` \`yetki sıfırla @Kullanıcı\`\n **Etiketlediğiniz kullanıcının yetkilerini sıfırlarsınız.**\n\`•\` \`yetki liste\`\n **Sunucudaki tüm yetkileri listeler.**
  `)
  .setColor("BLUE")
message.channel.send(yetkiembed)
return
}

if (args[0] === "yetenek") {

  let yetkiembed = new MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
  .setTitle(`Yetenek Yardım Menüsü`)
  .setDescription(`Yetenek Yardım Menüsüne hoş geldin,\n
  \`•\` \`yetenek ver <yetenekismi> @Kullanıcı\` \n**Etiketlediğiniz kullanıcıya belirttiğiniz yetenek rolünü verirsiniz.**\n \`•\` \`yetenek sıfırla @Kullanıcı\` \n**Etiketlediğiniz kullanıcının yetenek rollerini sıfırlarsınız.**\n\`•\` \`yetenek al [@Rol]\`\n **Etiketlediğiniz kişiden belirttiğiniz yetenek rolünü alırsınız.**
  `)
  .setColor("BLUE")
message.channel.send(yetkiembed)
return
}

if (args[0] === "staff") {

  let yetkiembed = new MessageEmbed()
  .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
  .setTitle(`Yetki Yardım Menüsü`)
  .setDescription(`Yetki Yardım Menüsüne hoş geldin,\n
  \`•\` \`staff ver <staffismi> @Kullanıcı\` \n**Etiketlediğiniz kullanıcıya belirttiğiniz staff rolünü verirsiniz.**\n\`•\` \`staff sıfırla @Kullanıcı\` \n**Etiketlediğiniz kullanıcının staff rollerini sıfırlarsınız.**\n\`•\` \`staff al @Kullanıcı\`\n **Etiketlediğiniz kişiden belirttiğiniz staff rolünü alırsınız.**
  `)
  .setColor("BLUE")
message.channel.send(yetkiembed)
return
}

let embed = new MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setTitle(`Yönetim Botu Yardım Menüsü`)
.setDescription(`
**Yetki Kategorisi** (\`4\`) | \`yardım yetki\` |
**Yetenek Kategorisi** (\`3\`) | \`yardım yetenek\` |
**Staff Kategorisi** (\`3\`) | \`yardım staff\` |
`)
.setColor("BLUE")

if (!args[0]) return message.channel.send(embed)


  
}
module.exports.conf = {
  name: "yardım",
  enabled: true,
  guildOnly: true,
  aliases: ["help"]
};

exports.help = {
 name: 'yardım'
};