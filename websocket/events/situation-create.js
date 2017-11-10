'use strict';

const situationsController = require('../../controllers/situations');

/*  Create a new situation.

    PARAMS
      data (object): can contain information
        intentName (string)
        utterance (string)
      socket (object)

    RETURN
      none
*/
const situationCreate = (data, socket) => {

  situationsController.createSituation(data, (err, situation) => {
    if (!err) {
      socket.emit('situation-created', situation.dataValues);
    }
  });
};

module.exports = situationCreate;
