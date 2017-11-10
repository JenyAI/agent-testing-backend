'use strict';

const situations = require('../models').situations;

/*  Creates a new situation.

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

  return situations
  .create({
    intentName: attributes.intentName,
    utterance: attributes.utterance
  })
  .then(() => callback())
  .catch(err => {
    console.error(err);
    callback(true);
  })
};

module.exports = {
  createSituation: createSituation
};
