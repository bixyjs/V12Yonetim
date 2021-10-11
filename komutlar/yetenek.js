const Discord = require('discord.js')
const settings = require('../Ayarlar/Ayarlar.json')
const kanallar = require('../Ayarlar/Kanallar.json')
const ayarlar = require('../Ayarlar/Yetkiler.json')
const cevaplar = require('../Ayarlar/Cevaplar.json')


exports.run = (client, message, args) => {
    
 if(![ayarlar.Stafflar["YetkiVeren"]].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return //message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetersizYetki))   
   
    let user = message.mentions.users.first();
    let role = message.mentions.roles.first();
    let author = message.author;
    let member = message.guild.member(user)
    let prefix = settings.prefix
    let log = (kanallar.YetenekLogKanal)
    let bixyembed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(`meyd bay bixy`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
    
  if(!args[0]) return message.channel.send(bixyembed.setTitle("Verebileceğin Yetenek Rolleri")
.setDescription(`

__**Yetenek Rolleri**__

  \`•\` __Müziyen__ rolü **<@&${ayarlar.Yetenekler["Müzisyen"]}>**\n__*${prefix}yetenek ver müzisyen @Kullanıcı*__\n
  \`•\` __Vokal__ rolü **<@&${ayarlar.Yetenekler["Vokal"]}>**\n__*${prefix}yetenek ver vokal @Kullanıcı*__\n
  \`•\` __Tasarımcı__ rolü **<@&${ayarlar.Yetenekler["Tasarımcı"]}>**\n__*${prefix}yetenek ver tasarımcı @Kullanıcı*__\n
  \`•\` __Yazılımcı__ rolü **<@&${ayarlar.Yetenekler["Yazılımcı"]}>**\n__*${prefix}yetenek ver yazılımcı @Kullanıcı*__\n
  \`•\` __Ressam__ rolü **<@&${ayarlar.Yetenekler["Ressam"]}>**\n__*${prefix}yetenek ver ressam @Kullanıcı*__\n
  \`•\` __Streamer__ rolü **<@&${ayarlar.Yetenekler["Streamer"]}>**\n__*${prefix}yetenek ver youtuber @Kullanıcı*__\n
  \`•\` __Şair__ rolü **<@&${ayarlar.Yetenekler["Şair"]}>**\n__*${prefix}yetenek ver şair @Kullanıcı*__\n
  \`•\` __Voice Actor__ rolü **<@&${ayarlar.Yetenekler["VoiceActor"]}>**\n__*${prefix}yetenek ver voiceactor @Kullanıcı*__\n
      
__*${prefix}yetenek ver <Rol> @Kullanıcı*__ *komutuyla yetenek rolü verebilirsiniz.*
__*${prefix}yetenek al <Rol> @Kullanıcı*__ *komutuyla yetenek rolü alabilirsiniz.*
__*${prefix}yetenek sıfırla <Rol> @Kullanıcı*__ *komutuyla kullanıcının bütün yetenek rollerini alabilirsiniz.*
`))
  if(!args[1]) return message.channel.send(bixyembed.setDescription(`Komutu kullanabilmek için bir \`yetenek\` belirtmelisin.`))
   //--------Yetenek Ver--------\\ 
  if(args[0] === 'ver') {
    if(args[1] === 'müzisyen') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Yetenekler["Müzisyen"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıYetenek)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Yetenek Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Müzisyen rolünü vermek için** ✅ emojine tepki verin\n
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
      await member.roles.add(ayarlar.Yetenekler["Müzisyen"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Müzisyen\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Yetenek Rolü Verildi**")
.setDescription(`
 **\`•\` Yetenek rolü verilen kişi** ${member}\n
 **\`•\` Yetenek rolünü veren kişi** ${author}\n
 **\`•\` Verilen yetenek rolü** <@&${ayarlar.Yetenekler["Müzisyen"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'vokal') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Yetenekler["Vokal"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıYetenek)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Yetenek Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Vokal rolünü vermek için** ✅ emojine tepki verin\n
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
      await member.roles.add(ayarlar.Yetenekler["Vokal"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Vokal\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Yetenek Rolü Verildi**")
.setDescription(`
 **\`•\` Yetenek rolü verilen kişi** ${member}\n
 **\`•\` Yetenek rolünü veren kişi** ${author}\n
 **\`•\` Verilen yetenek rolü** <@&${ayarlar.Yetenekler["Vokal"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'tasarımcı') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Yetenekler["Tasarımcı"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıYetenek)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Yetenek Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Tasarımcı rolünü vermek için** ✅ emojine tepki verin\n
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
      await member.roles.add(ayarlar.Yetenekler["Tasarımcı"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Tasarımcı\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Yetenek Rolü Verildi**")
.setDescription(`
 **\`•\` Yetenek rolü verilen kişi** ${member}\n
 **\`•\` Yetenek rolünü veren kişi** ${author}\n
 **\`•\` Verilen yetenek rolü** <@&${ayarlar.Yetenekler["Tasarımcı"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'yazılımcı') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Yetenekler["Yazılımcı"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıYetenek)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Yetenek Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Yazılımcı rolünü vermek için** ✅ emojine tepki verin\n
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
      await member.roles.add(ayarlar.Yetenekler["Yazılımcı"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Yazılımcı\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Yetenek Rolü Verildi**")
.setDescription(`
 **\`•\` Yetenek rolü verilen kişi** ${member}\n
 **\`•\` Yetenek rolünü veren kişi** ${author}\n
 **\`•\` Verilen yetenek rolü** <@&${ayarlar.Yetenekler["Yazılımcı"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'ressam') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Yetenekler["Ressam"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıYetenek)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Yetenek Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Ressam rolünü vermek için** ✅ emojine tepki verin\n
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
      await member.roles.add(ayarlar.Yetenekler["Ressam"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Ressam\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Yetenek Rolü Verildi**")
.setDescription(`
 **\`•\` Yetenek rolü verilen kişi** ${member}\n
 **\`•\` Yetenek rolünü veren kişi** ${author}\n
 **\`•\` Verilen yetenek rolü** <@&${ayarlar.Yetenekler["Ressam"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'streamer') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Yetenekler["Streamer"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıYetenek)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Yetenek Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Streamer rolünü vermek için** ✅ emojine tepki verin\n
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
      await member.roles.add(ayarlar.Yetenekler["Streamer"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Streamer\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Yetenek Rolü Verildi**")
.setDescription(`
 **\`•\` Yetenek rolü verilen kişi** ${member}\n
 **\`•\` Yetenek rolünü veren kişi** ${author}\n
 **\`•\` Verilen yetenek rolü** <@&${ayarlar.Yetenekler["Streamer"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'şair') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Yetenekler["Şair"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıYetenek)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Yetenek Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Şair rolünü vermek için** ✅ emojine tepki verin\n
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
      await member.roles.add(ayarlar.Yetenekler["Şair"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Şair\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Yetenek Rolü Verildi**")
.setDescription(`
 **\`•\` Yetenek rolü verilen kişi** ${member}\n
 **\`•\` Yetenek rolünü veren kişi** ${author}\n
 **\`•\` Verilen yetenek rolü** <@&${ayarlar.Yetenekler["Şair"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'voiceactor') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(member.roles.cache.get(ayarlar.Yetenekler["VoiceActor"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıYetenek)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Yetenek Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Voice Actor rolünü vermek için** ✅ emojine tepki verin\n
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
      await member.roles.add(ayarlar.Yetenekler["VoiceActor"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına \`Voice Actor\` rolü verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Yetenek Rolü Verildi**")
.setDescription(`
 **\`•\` Yetenek rolü verilen kişi** ${member}\n
 **\`•\` Yetenek rolünü veren kişi** ${author}\n
 **\`•\` Verilen yetenek rolü** <@&${ayarlar.Yetenekler["VoiceActor"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
  }
  //--------Yetenek Ver--------\\ 
  
  //--------Yetenek Al--------\\ 
  if(args[0] === 'al') {
    if(args[1] === 'müzisyen') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if(!member.roles.cache.get(ayarlar.Yetenekler["Müzisyen"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetenekYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      message.channel.send(bixyembed.setTitle("**Yetenek Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Müzisyen rolünü almak için** ✅ emojine tepki verin\n
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
      await member.roles.remove(ayarlar.Yetenekler["Müzisyen"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısından \`Müzisyen\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinden Yetenek Rolü Alındı**")
.setDescription(`
 **\`•\` Yetenek rolü alınan kişi** ${member}\n
 **\`•\` Yetenek rolünü alan kişi** ${author}\n
 **\`•\` Alınan yetenek rolü** <@&${ayarlar.Yetenekler["Müzisyen"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'vokal') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      message.channel.send(bixyembed.setTitle("**Yetenek Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Vokal rolünü almak için** ✅ emojine tepki verin\n
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
      await member.roles.remove(ayarlar.Yetenekler["Vokal"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısından \`Vokal\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinden Yetenek Rolü Alındı**")
.setDescription(`
 **\`•\` Yetenek rolü alınan kişi** ${member}\n
 **\`•\` Yetenek rolünü alan kişi** ${author}\n
 **\`•\` Alınan yetenek rolü** <@&${ayarlar.Yetenekler["Vokal"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'tasarımcı') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      message.channel.send(bixyembed.setTitle("**Yetenek Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Tasarımcı rolünü almak için** ✅ emojine tepki verin\n
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
      await member.roles.remove(ayarlar.Yetenekler["Tasarımcı"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısından \`Tasarımcı\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinden Yetenek Rolü Alındı**")
.setDescription(`
 **\`•\` Yetenek rolü alınan kişi** ${member}\n
 **\`•\` Yetenek rolünü alan kişi** ${author}\n
 **\`•\` Alınan yetenek rolü** <@&${ayarlar.Yetenekler["Tasarımcı"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    
    if(args[1] === 'yazılımcı') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      message.channel.send(bixyembed.setTitle("**Yetenek Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Yazılımcı rolünü almak için** ✅ emojine tepki verin\n
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
      await member.roles.remove(ayarlar.Yetenekler["Yazılımcı"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısından \`Yazılımcı\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinden Yetenek Rolü Alındı**")
.setDescription(`
 **\`•\` Yetenek rolü alınan kişi** ${member}\n
 **\`•\` Yetenek rolünü alan kişi** ${author}\n
 **\`•\` Alınan yetenek rolü** <@&${ayarlar.Yetenekler["Yazılımcı"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'ressam') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      message.channel.send(bixyembed.setTitle("**Yetenek Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Ressam rolünü almak için** ✅ emojine tepki verin\n
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
      await member.roles.remove(ayarlar.Yetenekler["Ressam"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısından \`Ressam\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinden Yetenek Rolü Alındı**")
.setDescription(`
 **\`•\` Yetenek rolü alınan kişi** ${member}\n
 **\`•\` Yetenek rolünü alan kişi** ${author}\n
 **\`•\` Alınan yetenek rolü** <@&${ayarlar.Yetenekler["Ressam"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'streamer') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      message.channel.send(bixyembed.setTitle("**Yetenek Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Streamer rolünü almak için** ✅ emojine tepki verin\n
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
      await member.roles.remove(ayarlar.Yetenekler["Streamer"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısından \`Streamer\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinden Yetenek Rolü Alındı**")
.setDescription(`
 **\`•\` Yetenek rolü alınan kişi** ${member}\n
 **\`•\` Yetenek rolünü alan kişi** ${author}\n
 **\`•\` Alınan yetenek rolü** <@&${ayarlar.Yetenekler["Streamer"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'şair') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      message.channel.send(bixyembed.setTitle("**Yetenek Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Şair rolünü almak için** ✅ emojine tepki verin\n
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
      await member.roles.remove(ayarlar.Yetenekler["Şair"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısından \`Şair\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinden Yetenek Rolü Alındı**")
.setDescription(`
 **\`•\` Yetenek rolü alınan kişi** ${member}\n
 **\`•\` Yetenek rolünü alan kişi** ${author}\n
 **\`•\` Alınan yetenek rolü** <@&${ayarlar.Yetenekler["Şair"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
    if(args[1] === 'voiceactor') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      message.channel.send(bixyembed.setTitle("**Yetenek Alma İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısının;
  
**\`•\` Voice Actor rolünü almak için** ✅ emojine tepki verin\n
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
      await member.roles.remove(ayarlar.Yetenekler["VoiceActor"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısından \`Voice Actor\` rolü alındı!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinden Yetenek Rolü Alındı**")
.setDescription(`
 **\`•\` Yetenek rolü alınan kişi** ${member}\n
 **\`•\` Yetenek rolünü alan kişi** ${author}\n
 **\`•\` Alınan yetenek rolü** <@&${ayarlar.Yetenekler["VoiceActor"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
  }
    
   
  }
  //--------Yetenek Al--------\\ 
  
   //--------Yetenek Sıfırla--------\\ 
    if(args[0] === 'sıfırla') {
       if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
    message.channel.send(bixyembed.setTitle("**Yetenek Sıfırlama İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcının;
**\`•\` Yeteneklerini sıfırlamak için** ✅ emojisine\n
 **\`•\` İşlemi iptal etmek için** ❌ emojisine\n
 Tepki verin
`)).then(async mesaj => {
    await mesaj.react('✅') //onay
    await mesaj.react('❌')// çarpı
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id; //onay id
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id; // çarpı id
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 10000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 10000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      member.roles.remove(ayarlar.Yetenekler["Müzisyen"])
      member.roles.remove(ayarlar.Yetenekler["Vokal"])
      member.roles.remove(ayarlar.Yetenekler["Tasarımcı"])
      member.roles.remove(ayarlar.Yetenekler["Yazılımcı"])
      member.roles.remove(ayarlar.Yetenekler["Ressam"])
      member.roles.remove(ayarlar.Yetenekler["YouTuber"])
      member.roles.remove(ayarlar.Yetenekler["Şair"])
      member.roles.remove(ayarlar.Yetenekler["VoiceActor"])
      
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısının yetenekleri sıfırlandı!**`))
      client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinin Yetenekleri Alındı**")
.setDescription(`
 **\`•\` Yetenekleri alınan kişi** ${member}\n
 **\`•\` Yetenekler alan kişi** ${author}
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
}
     //--------Yetenek Sıfırla--------\\ 
}
exports.conf = { 
  name: 'yetenek',
  enabled: true, 
  guildOnly: true, 
  aliases: ["yetenek"], 
  permLevel: 0
}

exports.help = {
 name: 'yetenek',
 help: `Yetenek ver komutuyla yetenek rolünü verirsiniz, al komutuyla alırsınız, sıfırlayla ise bütün yetenek rollerini alırsınız. Unutmayın bunları \`<prefix>yetenek [argüman]\` şeklinde kullanmalısınız`,
 usage: `yetenek [ver/al/sıfırla] [yetenek-ismi] [@Kullanıcı]`,
 category: "Yetenek",
}