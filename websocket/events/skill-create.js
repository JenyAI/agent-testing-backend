'use strict';

const controller = require('../../database/controllers/skills');

/*  Create a new skill.

    PARAMS
      data (object): can contain information
        grade (string)
        chapter (string)
        skill (string)
        subskill (string)
        title (string)
      socket (object)

    RETURN
      none
*/
const handler = (data, socket) => {

  controller.createSkill(data)
	.then(item => socket.emit('skill-created', item.dataValues))
	.catch(e => console.error(e));
};

module.exports = handler;
