'use strict';

const Op = require('sequelize').Op;
const controller = require('../models').cards;

/*************************************
*
*   Card
* -----------------------------------
*   REQUIRED PARAMETERS
*     src (string)
*     skillId (number): forreign key (skill id)
*************************************/

/*  Creates a new Card.

    PARAMS
      data (object): parameters required (see above)

    RETURN
      Promise
*/
const createCard = data => {

  // check all the required parameters are specified
  if (!data
    || typeof data.src === 'undefined'
    || typeof data.skillId === 'undefined') {
      return Promise.reject(new Error('missing information to create card'));
    }

  return controller
  .create({
    src: data.src,
    skillId: data.skillId,
  });
};

/*  Delete a card.

    PARAMS
      id (string): id of the card

    RETURN
      Promise
*/
const deleteCard = id => {

  return controller
  .destroy({
    where: { id: id }
  });
};

/*  Update a card.

    PARAMS
      data (object): contains information for update. Must contain property id (see above for further information)

    RETURN
      Promise
*/
const updateCard = data => {

  // check all the required parameters are specified
  if (!data.id) return Promise.reject(new Error('missing information to update card'));

  return controller
  .update({
    src: data.src,
    skillId: data.skillId,
  }, {
    where: { id: data.id }
  });
};

/*  Retrieve a card.

    PARAMS
      id (integer): id of the card

    RETURN
      Promise
*/
const getCard = id => {

  return controller
  .findOne({
    where: { id: id }
  });
};

/*  Retrieve all cards.

    PARAMS
			none

    RETURN
      Promise
*/
const getAllCards = () => {

  return controller
  .findAll({
    raw: true
  });
};

/*  Retrieve cards by skill id.

    PARAMS
      skillsId (array of numbers): id of the skills the card should be associated with

    RETURN
      Promise
*/
const getCardsBySkill = skillsId => {

  return controller
  .findAll({
    where: {
      skillId: {
        [Op.or]: skillsId
      }
    },
    raw: true
  });
};

module.exports = {
  createCard: createCard,
  deleteCard: deleteCard,
  updateCard: updateCard,
  getCard: getCard,
  getAllCards: getAllCards,
  getCardsBySkill: getCardsBySkill,
};
