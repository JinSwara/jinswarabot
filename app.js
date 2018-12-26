const dotenv = require('dotenv');
const Telegraf = require('telegraf');
const define = require("./define");

dotenv.load({ path: '.env' });

const bot = new Telegraf(process.env.TELEBOT_JINTECH);

const commonText = `
    Jai Jinendra!\n\nWelcome to jainism.tech bot.\n\nMessage in following format to get the definition of any Jainism Terminology.\n\n/define केवलज्ञान\n\nContact @Sowmay for technical and @Imdivyag for terminology suggestions.
`;

bot.start((req) => req.reply(commonText));

bot.command('define', (req) => {
    let term = req.message.text.split(" ")[1];
    if (define[term]) {
        req.reply(define[term]);
    } else {
        req.reply(`The term ${term} is stored in our database. Contact @Sowmay or @Divya for suggestions and feedback.`);
    }
});

bot.on('message', (req) => {
    req.reply(commonText);
});

bot.startPolling();

console.log("@jintechbot started!");