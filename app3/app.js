const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  const userInfo = req.cookies.userInfo;
  res.render('index', userInfo);
});

app.post('/', (req, res) => {
  const userInfo = req.body;
  res.cookie('userInfo', userInfo);
  res.render('index', userInfo);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
