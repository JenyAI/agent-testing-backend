const uuidv4 = require('uuid/v4');

const eventHandler = require('./events');

const setUpWebsocket = server => {
  let io = require('socket.io')(server);

  io.on('connection', socket => {

    socket.on('situation-create', data => eventHandler.situationCreate(data));

    socket.on('situation-delete', data => eventHandler.situationDelete(data));

    socket.on('situation-get-all', data => eventHandler.situationGetAll(socket));
  });
};

module.exports = setUpWebsocket;
