'use strict';

const situationsController = require('../../controllers/situations');

/*  Create a new situation.

    PARAMS
      data (object): contains information to create a situation
        intentName (string)
        utterance (string)

    RETURN
      none
*/
const situationCreate = (data) => {

  if (!data.intentName || !data.utterance) {
    console.error('missing information to create situation ', data);
    return;
  }

  situationsController.createSituation(data);
};

module.exports = situationCreate;
