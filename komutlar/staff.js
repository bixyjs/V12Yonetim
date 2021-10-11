const Discord = require('discord.js')
const settings = require('../Ayarlar/Ayarlar.json')
const kanallar = require('../Ayarlar/Kanallar.json')
const ayarlar = require('../Ayarlar/Yetkiler.json')
const cevaplar = require('../Ayarlar/Cevaplar.json')


exports.run = (client, message, args) => {
    
    if(![ayarlar.Stafflar["YetkiVeren"]].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta`)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
   
    let user = message.mentions.users.first();
    let role = message.mentions.roles.first();
    let author = message.author;
    let member = message.guild.member(user)
    let prefix = settings.prefix
    let log = (kanallar.YetenekLogKanal)
    let bixyembed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(`Made By bixy`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    
     if(!args[0]) return message.channel.send(bixyembed.setTitle("Verebileceğin Staff Rolleri")
.setDescription(`

__**Staff Rolleri**__

  \`•\` __Ban Staff__ **<@&${ayarlar.Stafflar["BanStaff"]}>**\n__*${prefix}staff ver ban @Kullanıcı*__\n
  \`•\` __Jail Staff__ **<@&${ayarlar.Stafflar["JailStaff"]}>**\n__*${prefix}staff ver jail @Kullanıcı*__\n
  \`•\` __Transport Staff__ **<@&${ayarlar.Stafflar["TransportStaff"]}>**\n__*${prefix}staff ver vmute @Kullanıcı*__\n
  \`•\` __Mute Staff__ **<@&${ayarlar.Stafflar["MuteStaff"]}>**\n__*${prefix}staff ver mute @Kullanıcı*__\n
  \`•\` __Register Staff__ **<@&${ayarlar.Stafflar["RegisterStaff"]}>**\n__*${prefix}staff ver register @Kullanıcı*__\n
__*${prefix}staff ver <Rol> @Kullanıcı*__ *komutuyla staff rolü verebilirsiniz.*
__*${prefix}staff al <Rol> @Kullanıcı*__ *komutuyla staff rolü alabilirsiniz.*
`))
  if(!args[1]) return message.channel.send(bixyembed.setDescription(`Komutu kullanabilmek için bir \`staff\` belirtmelisin.`))
    
    if(args[0] === 'ver') {
          if(args[1] === 'ban') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Stafflar["BanStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıStaff)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Staff Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Ban Staff rolünü vermek için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.add(ayarlar.Stafflar["BanStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Ban Staff\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü verilen kişi** ${member}\n
 **\`•\` Staff rolünü veren kişi** ${author}\n
 **\`•\` Verilen staff rolü** <@&${ayarlar.Stafflar["BanStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'jail') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Stafflar["JailStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıStaff)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Staff Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Jail Staff rolünü vermek için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.add(ayarlar.Stafflar["JailStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Jail Staff\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü verilen kişi** ${member}\n
 **\`•\` Staff rolünü veren kişi** ${author}\n
 **\`•\` Verilen staff rolü** <@&${ayarlar.Stafflar["JailStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'tranport') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Stafflar["TransportStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıStaff)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Staff Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Transport Staff rolünü vermek için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.add(ayarlar.Stafflar["TransportStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Transport Staff\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü verilen kişi** ${member}\n
 **\`•\` Staff rolünü veren kişi** ${author}\n
 **\`•\` Verilen staff rolü** <@&${ayarlar.Stafflar["TransportStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
      if(args[1] === 'mute') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Stafflar["MuteStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıStaff)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Staff Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Mute Staff rolünü vermek için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.add(ayarlar.Stafflar["MuteStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Mute Staff\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü verilen kişi** ${member}\n
 **\`•\` Staff rolünü veren kişi** ${author}\n
 **\`•\` Verilen staff rolü** <@&${ayarlar.Stafflar["MuteStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    if(args[1] === 'register') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Stafflar["RegisterStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıStaff)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Staff Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Register Staff rolünü vermek için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.add(ayarlar.Stafflar["RegisterStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Register Staff\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü verilen kişi** ${member}\n
 **\`•\` Staff rolünü veren kişi** ${author}\n
 **\`•\` Verilen staff rolü** <@&${ayarlar.Stafflar["RegisterStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    }
  
  //------Staff Al----------\\
if(args[0] === 'al') {
  
if(args[1] === 'ban') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(!member.roles.cache.get(ayarlar.Stafflar["BanStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.StaffYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Staff Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Ban Staff rolünü almak için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.remove(ayarlar.Stafflar["BanStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Ban Staff\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü alınan kişi** ${member}\n
 **\`•\` Staff rolünü alan kişi** ${author}\n
 **\`•\` Alınan staff rolü** <@&${ayarlar.Stafflar["BanStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
  
  if(args[1] === 'jail') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(!member.roles.cache.get(ayarlar.Stafflar["JailStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.StaffYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      message.channel.send(bixyembed.setTitle("**Staff Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Jail Staff rolünü almak için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.remove(ayarlar.Stafflar["JailStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Jail Staff\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü alınan kişi** ${member}\n
 **\`•\` Staff rolünü alan kişi** ${author}\n
 **\`•\` Alınan staff rolü** <@&${ayarlar.Stafflar["JailStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
  
  if(args[1] === 'transport') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(!member.roles.cache.get(ayarlar.Stafflar["TransportStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.StaffYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      message.channel.send(bixyembed.setTitle("**Staff Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Transport Staff rolünü almak için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.remove(ayarlar.Stafflar["TransportStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Transport Staff\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü alınan kişi** ${member}\n
 **\`•\` Staff rolünü alan kişi** ${author}\n
 **\`•\` Alınan staff rolü** <@&${ayarlar.Stafflar["TransportStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
  
  if(args[1] === 'mute') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(!member.roles.cache.get(ayarlar.Stafflar["MuteStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.StaffYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      message.channel.send(bixyembed.setTitle("**Staff Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Mute Staff rolünü almak için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.remove(ayarlar.Stafflar["MuteStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Mute Staff\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü alınan kişi** ${member}\n
 **\`•\` Staff rolünü alan kişi** ${author}\n
 **\`•\` Alınan staff rolü** <@&${ayarlar.Stafflar["MuteStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
  
  if(args[1] === 'register') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(!member.roles.cache.get(ayarlar.Stafflar["RegisterStaff"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.StaffYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      message.channel.send(bixyembed.setTitle("**Staff Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Register Staff rolünü almak için** ✅ emojine tepki verin\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅')
    await mesaj.react('❌')
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 300000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 300000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.remove(ayarlar.Stafflar["RegisterStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Register Staff\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Staff Rolü Verildi**")
.setDescription(`
 **\`•\` Staff rolü alınan kişi** ${member}\n
 **\`•\` Staff rolünü alan kişi** ${author}\n
 **\`•\` Alınan staff rolü** <@&${ayarlar.Stafflar["RegisterStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
  
  
}
 //------Staff Al----------\\

}
exports.conf = {
  name: 'staff',
  enabled: true, 
  guildOnly: true, 
  aliases: ["staff"], 
  permLevel: 0
}

exports.help = {
 name: 'staff',
 help: `Staff ver komutuyla staff rolünü verirsiniz, al komutuyla alırsınız, sıfırlayla ise bütün staff rollerini alırsınız. Unutmayın bunları <prefix>staff [argüman] şeklinde kullanmalısınız`,
 usage: `staff [ver/al/sıfırla] [staffismi] [@Kullanıcı]`,
 category: "Staff",
}