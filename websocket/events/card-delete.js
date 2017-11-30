'use strict';

const controller = require('../../database/controllers/cards');

/*  Delete a card.

    PARAMS
      data (object)
        id (string): id of the card to delete
      socket (object)

    RETURN
      none
*/
const handler = (data, socket) => {

  controller.deleteCard(data.id)
	.then(() => socket.emit('card-deleted', data.id))
	.catch(e => console.error(e))
};

module.exports = handler;
