'use strict';

const controller = require('../../database/controllers/skills');

/*  Update a skill.

    PARAMS
      data (object): contains information to update a skill. Must contain property id
      socket (object)

    RETURN
      none
*/
const handler = (data, socket) => {

  controller.updateSkill(data)
	.then(() => {
		controller.getSkill(data.id)
		.then(item => socket.emit('skill-updated', item.dataValues))
		.catch(e => console.error(e));
	})
	.catch(e => console.error(e));
};

module.exports = handler;
