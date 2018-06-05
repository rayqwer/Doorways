const express = require('express');
const path = require('path');
const environment = require('./helpers/Environment');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.end('Index page!');
});

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404);
  res.render('error', {
    message: 'Page not found.',
  });
});

const port = environment.isDebug() ? 3333 : 5555;
app.set('port', port);

const server = app.listen(app.get('port'), () => {
  environment.debugLog(`Express server listening on port ${server.address().port}`);
});
