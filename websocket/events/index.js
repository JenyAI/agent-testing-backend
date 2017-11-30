const situationCreate = require('./situation-create');
const situationDelete = require('./situation-delete');
const situationUpdate = require('./situation-update');
const situationGetAll = require('./situation-get-all');

const skillCreate = require('./skill-create');
const skillDelete = require('./skill-delete');
const skillUpdate = require('./skill-update');
const skillGetAll = require('./skill-get-all');

const cardCreate = require('./card-create');
const cardDelete = require('./card-delete');
const cardUpdate = require('./card-update');
const cardGetAll = require('./card-get-all');

module.exports = {
  situationCreate: situationCreate,
  situationDelete: situationDelete,
  situationUpdate: situationUpdate,
  situationGetAll: situationGetAll,

  skillCreate: skillCreate,
  skillDelete: skillDelete,
  skillUpdate: skillUpdate,
  skillGetAll: skillGetAll,

  cardCreate: cardCreate,
  cardDelete: cardDelete,
  cardUpdate: cardUpdate,
  cardGetAll: cardGetAll
};
