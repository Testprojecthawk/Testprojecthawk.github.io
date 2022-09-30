const express = require("express")
const app = express()
 
app.get("/", (req, res) => {
  res.send("Hawk System is in server!")
})
 
app.listen(3000, () => {
  console.log("Activity is ONline!")
})
 
let Discord = require("discord.js")
let client = new Discord.Client()
 
 
client.on('ready', () => {
 client.user.setActivity(`HawkEyes|ComingSoon.`, { type: 'PLAYING'})
})
 
client.login('OTg4MTExODE2OTQzMTA0MDMw.GaDkvb.-IedlwOqgNRjIoQMgv4PLMSdJiMnmadTraxeF0')
