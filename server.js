/* eslint-disable */

const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const bodyparser = require('body-parser');
nunjucks.configure({ noCache: true });

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(bodyparser.urlencoded());
app.use('/vendor', express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/', (req, res, next) => {
  res.render('index')
})
