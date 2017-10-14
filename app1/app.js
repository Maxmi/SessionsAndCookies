const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  const name = req.cookies.name;
  res.render('index', {name});
});

app.post('/', (req, res) => {
  const name = req.body["name"];
  res.cookie('name', name);
  res.render('index', {name});
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
