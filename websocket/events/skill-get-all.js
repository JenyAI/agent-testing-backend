'use strict';

const controller = require('../../database/controllers/skills');

/*  Retrieve all skills.

    PARAMS
      socket (object)

    RETURN
      none
*/
const handler = (socket) => {

  controller.getAllSkills()
	.then(list => socket.emit('skill-got-all', list))
	.catch(e => console.error(e));
};

module.exports = handler;
