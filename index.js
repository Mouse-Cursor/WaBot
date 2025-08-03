const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  puppeteer: { headless: true, args: ['--no-sandbox','--disable-setuid-sandbox'] }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('QR RECEIVED');
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', msg => {
  if (msg.body.toLowerCase() === '=halo') {
    msg.reply('Halo juga! Aku bot aktif 🚀');
  }
});

client.initialize();
