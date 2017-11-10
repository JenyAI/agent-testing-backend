'use strict';

const situations = require('../models').situations;

/*  Create a situation.

    PARAMS
      attributes (object): can contain
        intentName (string): name of the intent the utterance must trigger
        utterance (string)
      callback (function)
        err (boolean): true if error, undefined otherwise
        situation (object): freshly created situation, undefined if error

    RETURN
      none
*/
const createSituation = (attributes, callback) => {
  if (!callback) callback = () => { };

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

/*  Update a situation.

    PARAMS
      attributes (object): contains information for update. Must contain property id
      callback (function)
        err (boolean): true if error, undefined otherwise

    RETURN
      none
*/
const updateSituation = (attributes, callback) => {
  if (!callback) callback = () => { };

  if (!attributes.id) {
    console.error('missing information to update situation ', attributes);
    callback(true);
    return;
  }

  situations
  .update({
    intentName: attributes.intentName,
    utterance: attributes.utterance
  }, {
    where: { id: attributes.id }
  })
  .then(s => callback(undefined, s))
  .catch(err => {
    console.error(err);
    callback(true);
  })
};

/*  Retrieve a situation.

    PARAMS
      id (string): id of the situation
      callback (function)
        err (boolean): true if error, undefined otherwise
        situation (object): freshly updated situation, undefined if error

    RETURN
      none
*/
const getSituation = (id, callback) => {

  situations
  .findOne({
    where: { id: id }
  })
  .then(s => callback(undefined, s))
  .catch(err => {
    console.error(err);
    callback(true);
  })
};

/*  Retrieve all situations.

    PARAMS
      callback (function)
        err (boolean): true if error, undefined otherwise
        list (object): all situations, undefined if error

    RETURN
      none
*/
const getAllSituations = (callback) => {

  situations
  .findAll({
    raw: true
  })
  .then(list => callback(undefined, list))
  .catch(err => {
    console.error(err);
    callback(true);
  })
};

module.exports = {
  createSituation: createSituation,
  deleteSituation: deleteSituation,
  updateSituation: updateSituation,
  getSituation: getSituation,
  getAllSituations: getAllSituations
};
