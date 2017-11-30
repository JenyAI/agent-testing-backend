'use strict';

const controller = require('../../database/controllers/cards');

/*  Update a card.

    PARAMS
      data (object): contains information to update a card. Must contain property id
      socket (object)

    RETURN
      none
*/
const handler = (data, socket) => {

  controller.updateCard(data)
	.then(() => {
		controller.getCard(data.id)
		.then(item => socket.emit('card-updated', item.dataValues))
		.catch(e => console.error(e));
	})
	.catch(e => console.error(e));
};

module.exports = handler;
