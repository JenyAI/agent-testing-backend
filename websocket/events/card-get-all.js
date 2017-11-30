'use strict';

const controller = require('../../database/controllers/cards');

/*  Retrieve all cards.

    PARAMS
      socket (object)

    RETURN
      none
*/
const handler = (socket) => {

  controller.getAllCards()
	.then(list => socket.emit('card-got-all', list))
	.catch(e => console.error(e));
};

module.exports = handler;
