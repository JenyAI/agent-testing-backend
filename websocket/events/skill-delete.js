'use strict';

const controller = require('../../database/controllers/skills');

/*  Create a new skill.

    PARAMS
      data (object): contains information to create a situation
        id (string): id of the situation to delete
      socket (object)

    RETURN
      none
*/
const handler = (data, socket) => {

  controller.deleteSkill(data.id)
	.then(() => socket.emit('skill-deleted', data.id))
	.catch(e => console.error(e))
};

module.exports = handler;
