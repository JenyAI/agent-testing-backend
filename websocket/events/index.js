const situationCreate = require('./situation-create');
const situationDelete = require('./situation-delete');
const situationUpdate = require('./situation-update');
const situationGetAll = require('./situation-get-all');

const skillCreate = require('./skill-create');
const skillDelete = require('./skill-delete');
const skillUpdate = require('./skill-update');
const skillGetAll = require('./skill-get-all');

module.exports = {
  situationCreate: situationCreate,
  situationDelete: situationDelete,
  situationUpdate: situationUpdate,
  situationGetAll: situationGetAll,

  skillCreate: skillCreate,
  skillDelete: skillDelete,
  skillUpdate: skillUpdate,
  skillGetAll: skillGetAll
};
