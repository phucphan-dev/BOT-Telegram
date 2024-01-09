const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6573292882:AAGD9i18nBJt3v1Dvaw6YIR1vLJjjGbQ3XQ';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message. There are different kinds of
// messages.
// bot.onText( async (msg) => {
//   await bot.deleteMessage(chatId, msg.message_id);
// })

const removeMessage = async (chatId, messageId) => {
  await bot.deleteMessage(chatId, messageId);
}
const banMember = async (chatId, userId) => {
  await bot.banChatMember(chatId, userId);
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text === "/start") {
    bot.sendMessage(chatId, "Hello, Nice to meet you. I'm a bot.");
  }
  if (msg.text.match(/bấm vào|avatar|vào nhóm/g)) {
    removeMessage(chatId, msg.message_id);
  }
  if (msg.text === "/lichhoc") {
    bot.sendMessage(chatId, "Học thứ 2 4 6 mỗi tuần. 20h đến 22h nha ní ơi");
  }
});
bot.on('polling_error', (error) => {
  console.log(error);  // => 'EFATAL'
});