'use strict';

const controller = require('../../database/controllers/cards');

/*  Create a new card.

    PARAMS
      data (object): can contain information
        src (string)
        skillId (number): forreign key (skill id)
      socket (object)

    RETURN
      none
*/
const handler = (data, socket) => {

  controller.createCard(data)
	.then(item => socket.emit('card-created', item.dataValues))
	.catch(e => console.error(e));
};

module.exports = handler;
