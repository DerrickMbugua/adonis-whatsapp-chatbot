import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BotChatbotsController {
    public async bot({}: HttpContextContract){
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);
        
        client.messages
              .create({
                 from: 'whatsapp:+14155238886',
                 body: 'Hello there!',
                 to: 'whatsapp:+254715153806'
               })
              .then(message => console.log(message.sid));
    }
}
