const https = require('https');
const fs = require('fs');
const path = require('path');

const fonts = [
  {
    name: 'ClashDisplay-Variable',
    url: 'https://api.fontshare.com/v2/fonts/download/clash-display@2.0.0/woff2',
  },
  {
    name: 'Satoshi-Variable',
    url: 'https://api.fontshare.com/v2/fonts/download/satoshi@2.0.0/woff2',
  }
];

const downloadFont = (font) => {
  const fontPath = path.join(__dirname, 'public', 'fonts', `${font.name}.woff2`);
  
  https.get(font.url, (response) => {
    const fileStream = fs.createWriteStream(fontPath);
    response.pipe(fileStream);

    fileStream.on('finish', () => {
      console.log(`Downloaded ${font.name}`);
      fileStream.close();
    });
  }).on('error', (err) => {
    console.error(`Error downloading ${font.name}:`, err.message);
  });
};

fonts.forEach(downloadFont); 