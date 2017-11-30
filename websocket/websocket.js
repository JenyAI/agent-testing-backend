const uuidv4 = require('uuid/v4');

const eventHandler = require('./events');

const setUpWebsocket = server => {
  let io = require('socket.io')(server);

  io.on('connection', socket => {

		// situations
    socket.on('situation-create', data => eventHandler.situationCreate(data, socket));

    socket.on('situation-delete', data => eventHandler.situationDelete(data, socket));

    socket.on('situation-update', data => eventHandler.situationUpdate(data, socket));

    socket.on('situation-get-all', data => eventHandler.situationGetAll(socket));

		// skills
    socket.on('skill-create', data => eventHandler.skillCreate(data, socket));

    socket.on('skill-delete', data => eventHandler.skillDelete(data, socket));

    socket.on('skill-update', data => eventHandler.skillUpdate(data, socket));

    socket.on('skill-get-all', data => eventHandler.skillGetAll(socket));
  });
};

module.exports = setUpWebsocket;
