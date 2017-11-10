const situationCreate = require('./situation-create');
const situationDelete = require('./situation-delete');
const situationGetAll = require('./situation-get-all');

module.exports = {
  situationCreate: situationCreate,
  situationDelete: situationDelete,
  situationGetAll: situationGetAll
};
