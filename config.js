//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "919883054919@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "0000000";
global.owner = process.env.OWNER_NUMBER || "919883054519";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZEM2t5YmNRa3h3eDR1WXoxWnVKbi92SUtRVVY1SkFhWDVHbHo4Y0VWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1JBaHQxOTdDZ3FRYmJ0VldQSHMrczBFL1RDbTc3cWdUc05aOGdtU1BrVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTUpEbU9tNjAwVE80WGJnZnNWcmlIMmErYW80a0QzK2U2NTZuMG05WW1vPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4NVAxa0o2YkdHYThabXdHNkVWdGVIZ0xMQ2x3TEVOUURCak1tVEVpRjI0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFGNVRMSmhqVzdwSXdFM0hEeFp4YTZ6WG5PZndrMXV4eWJUdWQ3QjVIM1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJHYTdPcmFZSGZLYXVwWGZYb3dvSjlSUFdzdndpaHQ0Ymh3dUQ3MFFrUkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BrTUJLSzV1UnJrTkNDVnNUT3ovVEZRbTRhTFR3enFiVlJKSlR6bXFHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNm1TQXR2L1VEVk9YWFJFdWtPTGRiWnNRalJkbFlCZDJsRUMrUk1ZeUFUST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNleFRFRkhQT05NcXpLVFVMQkpsNC9yWnhqeUp4UnpaNDVRUVdWTTBkQ2tINEx2SFk4Sm0wWDJQUTRIUGhVTjVIUzVjNUpwVmVTRTAxdE1wYVcrSkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6Imc4ZThjQk5zeUtLVFhqdFRkYnczaDA5OUhaU3dCZFd0bGN4M0pBVmFVclk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5ODgzMDU0NTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRBNjQ3QTJBRkMxODFGN0ZCNkIzRDhCQUJFRkQ2RDgzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQ4NTk3Mzh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxOTg4MzA1NDUxOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4N0M1NDQ5QTMwOTM5N0UyRjU1QkI2NDBENjFFMkNBMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM0ODU5NzM4fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk4ODMwNTQ1MTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOENBRDY0NUVBNzc5MjBFNEQ0N0FGRDU4N0E0REM2OUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNDg1OTczOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTE5ODgzMDU0NTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjZCRUZEQTIxREM5RDI0NTAyQTY0MDk5QkQzOUVCRDYwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQ4NTk3Mzl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijc3X2Z2RDQwUVdlSGNtNzB5bzRmV2ciLCJwaG9uZUlkIjoiMGRjOGUxNTAtNTU3NC00ZGJjLWE3OWMtYWQ2ZWVjOGI0ZWIxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZFaXl3RVE5dEtuRmtRNlVqSHpCWVBHY2Fabz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMZlhXcm9qN0tobktrRVVqbzJiOTlDN1drNms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUNaWlYzSjEiLCJtZSI6eyJpZCI6IjkxOTg4MzA1NDUxOToxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlVKQVlFUiBSQUhBTUFOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQL01wYndCRU15M243c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIrbG02V2tKVXNscWljTTU5Z3pXakd2ekdGaituYUxQcE1UTzJJUGxWaWhZPSIsImFjY291bnRTaWduYXR1cmUiOiJzdWZJeXVKSGJzSUIxdmxwaXQ2OUN4VlhmMTMvQ0FvSkthdzdpZ1JiaEZCNGNlZmM5S0VjOFF1RVlIcHdkVUpVaW5Hc2tPdU16eHpIbU9OWWN2RTdEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNG43dXkvU3AyNDRobWlzdExLRllWSG5tOFlhVDBvS3o5ZWJCQVNpaTVVbWEvQUlpN1lOd1BWWGdsOUs4cTloanVqU0s1bG03bEg2Z2F1b3ZDMFVqQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTk4ODMwNTQ1MTk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmcFp1bHBDVkxKYW9uRE9mWU0xb3hyOHhoWS9wMml6NlRFenRpRDVWWW9XIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0ODU5NzM3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU91UiJ9";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
