const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
  
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
:new_moon_with_face: :two_hearts:  لو سمحت طالبك طلب تكقا ادخل السيرفر
                               [ https://discord.gg/vFYHGr7 ] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
