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
    let log = (kanallar.YetkiLogKanal)
    let bixyembed = new Discord.MessageEmbed().setColor("RANDOM").setFooter(`meyd bay bixy`).setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))

  if(!args[0]) return message.channel.send(bixyembed.setDescription(`Komutu kullanabilmek için \`ver/yükselt/liste/sıfırla\` argümanlarından birisini kullanmalısınız.`))
  
  //------Yetki Ver-------\\
  if(args[0] === 'ver') {
    if(!args[1]) return message.channel.send(bixyembed.setDescription(`Komutu kullanabilmek için bir \`seviye\` belirtmelisin.`))
    if(args[1] === '1') {
    if (member.id == message.author.id) return message.reply(cevaplar.Kendine)
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
message.channel.send(bixyembed.setTitle("**Yetki Verme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Yetki vermek için** ✅ emojine tepki verin\n
**\`•\` Verilecek yetkiler** <@&${ayarlar.YetkiliRolleri["AltYetkiliRolü"]}>, <@&${ayarlar.Stafflar["RegisterStaff"]}>, <@&${ayarlar.Stafflar["MuteStaff"]}>\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅') //onay
    await mesaj.react('❌')// çarpı
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id; //onay id
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id; // çarpı id
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 10000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 10000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.add(ayarlar.YetkiliRolleri["AltYetkiliRolü"])
      await member.roles.add(ayarlar.Stafflar["RegisterStaff"])
      await member.roles.add(ayarlar.Stafflar["MuteStaff"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısına yetkileri verildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisine Yetki Verildi**")
.setDescription(`
 **\`•\` Yetki verilen kişi** ${member}\n
 **\`•\` Yetkiyi veren kişi** ${author}\n
 **\`•\` Verilen yetkiler** <@&${ayarlar.YetkiliRolleri["AltYetkiliRolü"]}>, <@&${ayarlar.Stafflar["RegisterStaff"]}>, <@&${ayarlar.Stafflar["MuteStaff"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
     })
   })  
  }
}
  //------Yetki Ver-------\\
  
  //------Yetki Yükselt-----\\
  if(args[0] === 'yükselt') {
    
    if(!args[1]) return message.channel.send(bixyembed.setDescription(`Komutu kullanabilmek için bir \`seviye\` belirtmelisin.`))
    if(args[1] === '1') {
      
      if(!member) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription('Birisini etiketlemeyi unuttun!'))
      if (member.id == message.author.id) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(cevaplar.Kendine))
  }
    
    
    if(args[1] === '2') {
      if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
      if (member.id == message.author.id) return message.channel.send(new Discord.MessageEmbed().setDescription(cevaplar.Kendine))
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["AltYetkiliRolü2"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.AynıYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["AltYetkiliRolü3"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["AltYetkiliRolü4"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["AltYetkiliRolü5"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü2"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü3"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü4"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü5"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü2"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü3"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü4"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü5"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü6"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü7"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YüksekYetki)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
message.channel.send(bixyembed.setTitle("**Yetki Yükseltme İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcısına;
  
**\`•\` Yetki yükseltmek için** ✅ emojine tepki verin\n
**\`•\` Verilecek yetkiler** <@&${ayarlar.YetkiliRolleri["AltYetkiliRolü2"]}>\n
 **\`•\`** İşlemi iptal etmek için ❌ emojisine Tepki verin.
`)).then(async mesaj => {
    await mesaj.react('✅') //onay
    await mesaj.react('❌')// çarpı
    
    const onayemoji = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id; //onay id
    const iptalemoji = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id; // çarpı id
    
    const onay = mesaj.createReactionCollector(onayemoji, { time: 10000 });
    const iptal = mesaj.createReactionCollector(iptalemoji, { time: 10000 });
    
    onay.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      await member.roles.add(ayarlar.YetkiliRolleri["AltYetkiliRolü2"])
      await member.roles.remove(ayarlar.YetkiliRolleri["AltYetkiliRolü"])
      
      mesaj.edit(bixyembed.setDescription(`**Başarıyla ${member} kullanıcısının yetki seviyesi yükseltildi!**`))
      
client.channels.cache.get(log).send(bixyembed.setTimestamp().setTitle("**Birisinin Yetkisi Yükseltildi**")
.setDescription(`
 **\`•\` Yetkisi yükseltilen kişi** ${member}\n
 **\`•\` Yetkiyi yükselten kişi** ${author}\n
 **\`•\` Verilen yetkiler** <@&${ayarlar.YetkiliRolleri["AltYetkiliRolü2"]}>
`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`**İşlem iptal edildi!**`))
    })
  })  
 } 
}
  //------Yetki Yükselt-----\\
  
  
  //-------Yetki Liste-----\\
  if(args[0] === 'liste') {
    if(!args[1]) return message.channel.send(bixyembed.setDescription(`Komutu kullanabilmek için \`alt/orta/üst\` argümanlarından birini yazmalısın.`))
  if(args[1] === 'alt') {
      message.channel.send(bixyembed.setTitle("__**Alt Yetkili Rolleri**__")
.setDescription(`

  \`1.\` **<@&${ayarlar.YetkiliRolleri["AltYetkiliRolü"]}>**
  \`2.\` **<@&${ayarlar.YetkiliRolleri["AltYetkiliRolü2"]}>**
  \`3.\` **<@&${ayarlar.YetkiliRolleri["AltYetkiliRolü3"]}>**
  \`4.\` **<@&${ayarlar.YetkiliRolleri["AltYetkiliRolü4"]}>**
  \`5.\` **<@&${ayarlar.YetkiliRolleri["AltYetkiliRolü5"]}>**

__**Alt Yetkili Staffları**__ **<@&${ayarlar.Stafflar["RegisterStaff"]}>**, **<@&${ayarlar.Stafflar["MuteStaff"]}>**

`))
    }
  
  
  if(args[1] === 'orta') {
    message.channel.send(bixyembed.setTitle("__**Orta Yetkili Rolleri**__")
.setDescription(`

  \`6.\` **<@&${ayarlar.YetkiliRolleri["OrtaYetkiliRolü"]}>**
  \`7.\` **<@&${ayarlar.YetkiliRolleri["OrtaYetkiliRolü2"]}>**
  \`8.\` **<@&${ayarlar.YetkiliRolleri["OrtaYetkiliRolü3"]}>**
  \`9.\` **<@&${ayarlar.YetkiliRolleri["OrtaYetkiliRolü4"]}>**
  \`10.\` **<@&${ayarlar.YetkiliRolleri["OrtaYetkiliRolü5"]}>**

__**Orta Yetkili Staffları**__  **<@&${ayarlar.Stafflar["JailStaff"]}>**, **<@&${ayarlar.Stafflar["VMuteStaff"]}>**, **<@&${ayarlar.Stafflar["RegisterStaff"]}>**, **<@&${ayarlar.Stafflar["MuteStaff"]}>**

`))
  }
  
  
  if(args[1] === 'üst') {
    message.channel.send(bixyembed.setTitle("__**Üst Yetkili Rolleri**__")
.setDescription(`

  \`11.\` **<@&${ayarlar.YetkiliRolleri["ÜstYetkiliRolü"]}>**
  \`12.\` **<@&${ayarlar.YetkiliRolleri["ÜstYetkiliRolü2"]}>**
  \`13.\` **<@&${ayarlar.YetkiliRolleri["ÜstYetkiliRolü3"]}>**
  \`14.\` **<@&${ayarlar.YetkiliRolleri["ÜstYetkiliRolü4"]}>**
  \`15.\` **<@&${ayarlar.YetkiliRolleri["ÜstYetkiliRolü5"]}>**
  \`16.\` **<@&${ayarlar.YetkiliRolleri["ÜstYetkiliRolü6"]}>**
  \`17.\` **<@&${ayarlar.YetkiliRolleri["ÜstYetkiliRolü7"]}>**

__**Üst Yetkili Staffları**__ **<@&${ayarlar.Stafflar["BanStaff"]}>**, **<@&${ayarlar.Stafflar["JailStaff"]}>**, **<@&${ayarlar.Stafflar["VMuteStaff"]}>**, **<@&${ayarlar.Stafflar["RegisterStaff"]}>**, **<@&${ayarlar.Stafflar["MuteStaff"]}>**

`))
  }
}
  //-------Yetki Liste-----\\
  
   //-------Yetki Sıfırla-----\\
  if(args[0] === 'sıfırla') {
    if(!member) return message.channel.send(new Discord.MessageEmbed().setDescription('Birisini etiketlemeyi unuttun!'))
        if (member.id == message.author.id) return message.reply(cevaplar.Kendine)
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["AltYetkiliRolü"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["AltYetkiliRolü2"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["AltYetkiliRolü3"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["AltYetkiliRolü4"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["AltYetkiliRolü5"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü2"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü3"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü4"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["OrtaYetkiliRolü5"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü2"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü3"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü4"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü5"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü6"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());
      if(!member.roles.cache.get(ayarlar.YetkiliRolleri["ÜstYetkiliRolü7"])) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(cevaplar.YetkiYok)).then(e => e.delete({ timeout: 10000 })).catch(err => console.error());

    message.channel.send(bixyembed.setTitle("**Yetki Sıfırlama İşlemi**")
  .setDescription(`
  ${author} adlı Kullanıcının;
**\`•\` Yetkilerini almak için** ✅ emojisine\n
 *Yetkilerin hepsini almak biraz zaman alabilir.*\n
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
      member.roles.remove(ayarlar.YetkiliRolleri["AltYetkiliRolü5"])
      member.roles.remove(ayarlar.YetkiliRolleri["AltYetkiliRolü4"])
      member.roles.remove(ayarlar.YetkiliRolleri["AltYetkiliRolü3"])
      member.roles.remove(ayarlar.YetkiliRolleri["AltYetkiliRolü2"])
      member.roles.remove(ayarlar.YetkiliRolleri["AltYetkiliRolü"])
      member.roles.remove(ayarlar.YetkiliRolleri["OrtaYetkiliRolü5"])
      member.roles.remove(ayarlar.YetkiliRolleri["OrtaYetkiliRolü4"])
      member.roles.remove(ayarlar.YetkiliRolleri["OrtaYetkiliRolü3"])
      member.roles.remove(ayarlar.YetkiliRolleri["OrtaYetkiliRolü2"])
      member.roles.remove(ayarlar.YetkiliRolleri["OrtaYetkiliRolü"])
      member.roles.remove(ayarlar.YetkiliRolleri["ÜstYetkiliRolü7"])
      member.roles.remove(ayarlar.YetkiliRolleri["ÜstYetkiliRolü6"])
      member.roles.remove(ayarlar.YetkiliRolleri["ÜstYetkiliRolü5"])
      member.roles.remove(ayarlar.YetkiliRolleri["ÜstYetkiliRolü4"])
      member.roles.remove(ayarlar.YetkiliRolleri["ÜstYetkiliRolü3"])
      member.roles.remove(ayarlar.YetkiliRolleri["ÜstYetkiliRolü2"])
      member.roles.remove(ayarlar.YetkiliRolleri["ÜstYetkiliRolü"])
      member.roles.remove(ayarlar.Stafflar["RegisterStaff"])
      member.roles.remove(ayarlar.Stafflar["BanStaff"])
      member.roles.remove(ayarlar.Stafflar["JailStaff"])
      member.roles.remove(ayarlar.Stafflar["MuteStaff"])
      member.roles.remove(ayarlar.Stafflar["TransportStaff"])
      
      mesaj.edit(bixyembed.setColor("GREEN").setDescription(`Başarıyla ${member} kullanıcısının yetkileri sıfırlandı!`))
    })
    
    iptal.on('collect', async bixy => {
      mesaj.reactions.removeAll()
      
      mesaj.edit(bixyembed.setDescription(`İşlem iptal edildi!`))
    })
  })  
  }
  //-------Yetki Sıfırla-----\\
}
exports.conf = { 
  name: 'yetki',
  enabled: true, 
  guildOnly: true, 
  aliases: ["yetki","yt"], 
  permLevel: 0
}

exports.help = {
 name: 'yetki',
 help: `Yetki ver komutuyla yetki belirttiğiniz seviye rolünü verirsiniz, al komutuyla alırsınız, sıfırlayla ise bütün yetki rollerini alırsınız. Unutmayın bunları <prefix>yetki [argüman] şeklinde kullanmalısınız`,
 usage: `yetki [ver/al/sıfırla/liste] [yetki-ismi] [@Kullanıcı]`,
 category: "Yetki",
}