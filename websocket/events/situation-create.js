'use strict';

const situationsController = require('../../controllers/situations');

/*  Create a new situation.

    PARAMS
      data (object): contains information to create a situation

    RETURN
      none
*/
const situationCreate = (data) => {

  if (!data.intentName || !data.utterance) {
    console.error('missing attributes to create situation ', attributes);
    return;
  }

  situationsController.createSituation(data);
};

module.exports = situationCreate;
