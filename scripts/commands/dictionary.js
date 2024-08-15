module.exports = {
  config: {
  name: "in",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  prefix: 'awto',
  description: "Inbox",
  category: "without prefix",
  cooldowns: 5
},

start: async function({ nayan, events, Users, NAYAN }) {
  let uid;
  if (events.type === "message_reply") {
    uid = events.messageReply.senderID;
  } else if (Object.keys(events.mentions).length > 0) {
    uid = Object.keys(events.mentions)[0];
  } else {
    uid = events.senderID;
  }

  let name = await Users.getNameUser(uid);
const msg = `join_my_gc:https://m.me/j/Aba5xjgUn-X7eDrA/

[ ▶️]➜ 𝑵𝒂𝒎𝒆 : ${name}\n[ ▶️]➜ 𝑰𝑫: ${userid}`
await NAYAN.sendContact(msg, uid, events.threadID, events.messageID);
}
}
