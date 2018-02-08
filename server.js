/* eslint-disable */

const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const models = require('./models')
nunjucks.configure({ noCache: true });

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(bodyparser.urlencoded());
app.use('/vendor', express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

models.db.sync({force:true})
  .then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
      console.log('Server is listening on port 3001!');
    });
  })
  .catch(console.error);

// models.User.sync({})
//   .then(function () {
//     return models.Page.sync({})
//   })
//   .then(function () {
//     // make sure to replace the name below with your express app
//     app.listen(port, function () {
//       console.log(`Server is listening on port ${port}!`);
//     });
//   })
//   .catch(console.error);

app.get('/', (req, res, next) => {
  res.render('index')
})
