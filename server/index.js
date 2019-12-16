const express = require('express');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development';

const app = new express();

app.set('view engine', 'pug');
app.set('views', path.resolve(__dirname, './views'));

if (isDev) {
  app.use(
    async (req, res, next) => {
      if (/hot-update/.test(req.url)) {
        // 重定向到webpack dev server
        console.log('redirect: ', `http://localhost:4000${req.url}`);
        res.redirect(301, `http://localhost:4000${req.url}`);
      } else {
        next();
      }
    }
  )
}

app.use('/dist', express.static('./dist'));
app.use('/static', express.static('./static'));

const staticFile = isDev ? '/hot-update/js/main.js' : '/dist/js/main.js';
const vendorFile = isDev ? '/hot-update/js/vendor.js' : '/dist/js/vendor.js';

app.get('*', (req, res) => {
  res.render('index', {
    title: 'Hey Mr.jinghong',
    staticFile,
    vendorFile
  });
})

app.listen('3001', () => {
  console.log('监听3001端口');
})