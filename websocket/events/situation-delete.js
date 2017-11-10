'use strict';

const situationsController = require('../../controllers/situations');

/*  Create a new situation.

    PARAMS
      data (object): contains information to create a situation
        id (string): id of the situation to delete
      socket (object)

    RETURN
      none
*/
const situationDelete = (data, socket) => {

  if (!data.id) {
    console.error('missing information to delete situation ', data);
    return;
  }

  situationsController.deleteSituation(data.id, err => {
    if (!err) {
      socket.emit('situation-deleted', data.id);
    }
  });
};

module.exports = situationDelete;
