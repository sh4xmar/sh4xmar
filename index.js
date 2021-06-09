const TelegramBot = require('node-telegram-bot-api'); // подключаем node-telegram-bot-api
const token = '1861730435:AAFaUwtryZ2wXVcOLm47442YySNWYNVIoGQ';

const bot = new TelegramBot(token, {polling: true});
const keyboard = [
    [
      {
        text: 'Рандомное число',
        callback_data: 'numRandom'
      }
    ],
    [
        {
          text: 'День недели',
          callback_data: 'numNedelya'
        }
    ],
    [
        {
          text: 'Хочу написать владельцу бота',
          url: 'https://t.me/R0ZIN'
        }
      ]
  ];

bot.on('message', (msg) => {
  const chatId = msg.chat.id; 

  bot.sendMessage(chatId, 'Привет, Друг! чего хочешь?', {
        reply_markup: {
            inline_keyboard: keyboard
        }
    });
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    let img = '';

    if (query.data === 'numRandom') { 
        text = "Нет";
    }

    if (query.data === 'numNedelya') { 
        text = 'pes.png';
    }
  });