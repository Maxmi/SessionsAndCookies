const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
  name: 'mynewsessioncookie',
  keys: ['key1']
}));


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
