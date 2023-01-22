const twilio = require("twilio");
require("dotenv").config();

const accountSid = 'AC789f032939dde8eee5822bb077a1274b';
const authToken = 'process.env.Twilio_Auth_Token'; 

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: 'Hello from node',
    to: '+919839531208',
    from: '+13143473734', 
  })
  .then((message) => console.log(message.sid));