'use strict';

const situationsController = require('../../controllers/situations');

/*  Retrieve all situations.

    PARAMS
      socket (object)

    RETURN
      none
*/
const situationGetAll = (socket) => {

  situationsController.getAllSituations((err, list) => {
    if (err) socket.emit('situation-got-all', [ ]);
    else socket.emit('situation-got-all', list);
  });
};

module.exports = situationGetAll;
