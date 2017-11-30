'use strict';

const situationsController = require('../../database/controllers/situations');

/*  Create a new situation.

    PARAMS
      data (object): contains information to create a situation. Must contain property id
      socket (object)

    RETURN
      none
*/
const situationUpdate = (data, socket) => {

  if (!data.id) {
    console.error('missing information to update situation ', data);
    return;
  }

  situationsController.updateSituation(data, err => {
    if (!err) {
      situationsController.getSituation(data.id, (err, situation) => {
        if (!err) socket.emit('situation-updated', situation.dataValues);
      });
    }
  });
};

module.exports = situationUpdate;
