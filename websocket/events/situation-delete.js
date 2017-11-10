'use strict';

const situationsController = require('../../controllers/situations');

/*  Create a new situation.

    PARAMS
      data (object): contains information to create a situation
        id (string): id of the situation to delete

    RETURN
      none
*/
const situationDelete = (data) => {

  if (!data.id) {
    console.error('missing information to delete situation ', attributes);
    return;
  }

  situationsController.deleteSituation(data.id);
};

module.exports = situationDelete;
