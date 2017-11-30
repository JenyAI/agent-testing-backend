let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const env = require('./config/env');
const setUpWebsocket = require('./websocket/websocket');

// configuration application =================

app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let server = app.listen(env.port);

// configuration websocket =================

setUpWebsocket(server);
console.log(`server listening on port ${env.port}`);
