const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const onHeaders = require('on-headers');

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.session = req.cookies.sessionCookie;
  onHeaders(res, () => {
    res.cookie('sessionCookie', req.session);
  });
  next();
});


app.get('/', (req, res) => {
  res.render('index', req.session);
});

app.post('/', (req, res) => {
  req.session = req.body;
  res.render('index', req.session);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
