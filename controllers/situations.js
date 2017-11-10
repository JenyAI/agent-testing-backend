'use strict';

const situations = require('../models').situations;

/*  Create a situation.

    PARAMS
      attributes (object): must contain
        intentName (string): name of the intent the utterance must trigger
        utterance (string)
      callback (function)
        err (boolean): true if error, undefined otherwise

    RETURN
      none
*/
const createSituation = (attributes, callback) => {
  if (!callback) callback = () => { };

  if (!attributes.intentName || !attributes.utterance) {
    console.error('missing attributes to create situation ', attributes);
    callback(true);
    return;
  }

  situations
  .create({
    intentName: attributes.intentName,
    utterance: attributes.utterance,
  })
  .then(s => callback(undefined, s))
  .catch(err => {
    console.error(err);
    callback(true);
  })
};

/*  Delete a situation.

    PARAMS
      id (string): id of the situation
      callback (function)
        err (boolean): true if error, undefined otherwise

    RETURN
      none
*/
const deleteSituation = (id, callback) => {
  if (!callback) callback = () => { };

  situations
  .destroy({
    where: { id: id }
  })
  .then(() => callback())
  .catch(err => {
    console.error(err);
    callback(true);
  })
};

module.exports = {
  createSituation: createSituation,
  deleteSituation: deleteSituation
};
