const dotenv = require('dotenv');
const Telegraf = require('telegraf');
const define = require("./define");

dotenv.load({ path: '.env' });

const bot = new Telegraf(process.env.TELEBOT_JINTECH);

const commonText = `Jai Jinendra!\n\nWelcome to JinSwara bot.\n\nMessage in following format to get the definition of any Jainism Terminology.\n\n/define केवलज्ञान\n\n Type /about for more info.\n\nType /ask to ask a question.\n\nType /contact to connect to the team.`;

bot.start((req) => req.reply(commonText));

bot.command('about', (req) => {
    req.reply("I'm JinSwara! Please visit jinswara.com for more details.");
});

bot.command('ask', (req) => {
    req.reply("Please visit forum.jinswara.com to ask Jainism related questions.");
});

bot.command('contact', (req) => {
    req.reply("Please contact connect@jinswara.com or join us https://t.me/JinSwara");
});

bot.command('define', (req) => {
    let term = req.message.text.split(" ")[1];
    if (define[term]) {
        req.reply(define[term]);
    } else {
        req.reply(`The term ${term} is not yet defined in our database. Please contact our team at connect@jinswara.com`);
    }
});

bot.on('message', (req) => {
    req.reply(commonText);
});

bot.startPolling();

console.log("@JinSwaraBot Started!");