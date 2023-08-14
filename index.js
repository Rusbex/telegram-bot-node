const TelegramBot = require('node-telegram-bot-api');

const token = '6501948998:AAEFOmPwmFfdK07L93ehHxXaps-hOUMTArY';
const bot = new TelegramBot(token, { polling: true });

// Функция для отправки меню с вариантами выбора
function sendMainMenu(chatId) {
    const options = {
        reply_markup: {
            keyboard: [
                ['Услуги', 'Портфолио'],
                ['Обо мне', 'О боте',
                    'Контакты',],
            ],
            resize_keyboard: true,
            one_time_keyboard: true,
        },
    };

    bot.sendMessage(chatId, 'Выберите один из вариантов:', options);
}

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === '/start') {
        bot.sendMessage(chatId, 'Привет! Здесь вы можете узнать подробнее об моих услугах и портфолио');
        sendMainMenu(chatId);
    } else if (msg.text === 'Услуги') {
        bot.sendMessage(chatId, 'Я предлагаю услуги по разработке сайтов от лендингов до интернет-магазинов, телеграм-ботов а также обновление дизайна сайтов, доработка и услуги по интеграции других сервисов (онлайн оплата, 1C и т.д.)\n' +
            'Подробнее можете узнать на моем сайте https://main.bexon.kz/');
        sendMainMenu(chatId);
    } else if (msg.text === 'Портфолио') {
        bot.sendMessage(chatId, 'BilimgeOrleu - корпоративный сайт на Laravel http://bilimge-orleu.kz/');
        bot.sendMessage(chatId, 'Demeuli - корпоративный сайт на Wordpress https://demeuli.kz/');
        bot.sendMessage(chatId, 'Shardara-Nesie - корпоративный сайт на Laravel https://shardara-nesie.bexon.kz/');
        bot.sendMessage(chatId, 'Spartak-kz - лендинг на HTML/CSS https://spartak-kz.com/');
        bot.sendMessage(chatId, 'SabraTrade - лендинг на Wordpress https://sabratrade.eu/');
        bot.sendMessage(chatId, 'Конструктор для создания простинких прелендингов - разработан на Laravel http://constructor.bexon.kz/');
        sendMainMenu(chatId);
    } else if (msg.text === 'Обо мне') {
        bot.sendMessage(chatId, 'Привет, я\n' +
            'Rustam Tuyakov.\n' +
            'Full-Stack разработчик.\n' +
            'Мне 22 и я живу в г. Шымкент, занимаюсь web-разработкой.\n' +
            'Владею: HTML, CSS, PHP, JS, SQL\n' +
            'Знаю: ООП, SOLID, MVC, UI/UX\n' +
            'Работаю с Laravel, Wordpress, Bootstrap, jQuery, MySql, SQLite, API, Git, Docker\n' +
            'Подробнее обо мне можно узнать на моем сайте-визитке https://bexon.kz/');
        sendMainMenu(chatId);
    } else if (msg.text === 'О боте') {
        bot.sendMessage(chatId, 'Меня зовут Rusbex, я телеграм-бот, написан на Node.js');
        sendMainMenu(chatId);
    }
    else if (msg.text === 'Контакты') {
        // Отправляем контактные данные и кнопки
        const options = {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Написать в Telegram', url: 'https://t.me/bexon123' }],
                    [{ text: 'Написать в WhatsApp', url: 'https://api.whatsapp.com/send?phone=87786205167' }],
                ],
            },
        };

        bot.sendMessage(chatId, 'Свяжитесь со мной:', options);
        sendMainMenu(chatId);
    }
});

// Обработка callback-кнопок (если понадобится)
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    // Тут можно добавить дополнительную обработку callback-кнопок
});