const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',  () => {
  console.log('By:Sofa');
});

const developers = ['458166135452598273'];
const adminprefix = ".";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'pl')) {
    client.user.setGame(argresult);
      message.channel.send("**:white_check_mark: | .The Playing Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send("**:white_check_mark: | The Watching Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send("**:white_check_mark: | The Listening Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/i_kahrba999");
      message.channel.send("**:white_check_mark: | The Streaming Status Has Been Changed To : ``"
   + `${argresult}` + "``**")
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('ready',async () => {//Toxic Codes
console.log("Starting..");//Toxic Codes
let g = client.guilds.get("475944692245200898"); // id server
let c = g.channels.get("589838159630696476");// id channel
if(c.type === 'voice') {//Toxic Codes
c.join();//Toxic Codes
setInterval(() => {//Toxic Codes
if(!g.me.voiceChannel) c.join();
}, 1);//Toxic Codes
} else {//Toxic Codes
console.log('Failed To Join: \n The Channel Type isn "Listening."')
}
});

client.login(process.env.TOKEN);
