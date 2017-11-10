const situationCreate = require('./situation-create');
const situationDelete = require('./situation-delete');
const situationUpdate = require('./situation-update');
const situationGetAll = require('./situation-get-all');

module.exports = {
  situationCreate: situationCreate,
  situationDelete: situationDelete,
  situationUpdate: situationUpdate,
  situationGetAll: situationGetAll
};
