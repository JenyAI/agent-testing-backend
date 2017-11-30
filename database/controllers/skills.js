'use strict';

const controller = require('../models').skills;

/*************************************
*
*   Skill
* -----------------------------------
*   REQUIRED PARAMETERS
*     grade (string)
*     chapter (string)
*     skill (string)
*     subskill (string)
*     title (string)
*************************************/

/*  Creates a new skill.

    PARAMS
      data (object): parameters required (see above)

    RETURN
      Promise
*/
const createSkill = data => {

  // check all the required parameters are specified
  if (!data
    || typeof data.grade === 'undefined'
    || typeof data.chapter === 'undefined'
    || typeof data.skill === 'undefined'
    || typeof data.subskill === 'undefined'
    || typeof data.title === 'undefined') {
    return Promise.reject(new Error('missing information to create skill'));
  }

  return controller
  .create({
    grade: data.grade,
    chapter: data.chapter,
    skill: data.skill,
    subskill: data.subskill,
    title: data.title,
  });
};

/*  Delete a skill.

    PARAMS
      id (string): id of the skill

    RETURN
      Promise
*/
const deleteSkill = id => {

  return controller
  .destroy({
    where: { id: id }
  });
};

/*  Update a skill.

    PARAMS
      data (object): contains information for update. Must contain property id (see above for further information)

    RETURN
      Promise
*/
const updateSkill = data => {

  // check all the required parameters are specified
  if (!data.id) return Promise.reject(new Error('missing information to update skill'));

  return controller
  .update({
    grade: data.grade,
    chapter: data.chapter,
    skill: data.skill,
    subskill: data.subskill,
    title: data.title,
  }, {
    where: { id: data.id }
  });
};

/*  Retrieve a skill.

    PARAMS
      id (integer): id of the skill

    RETURN
      Promise
*/
const getSkill = id => {

  return controller
  .findOne({
    where: { id: id }
  });
};

/*  Retrieve a skill by acronym.

    PARAMS
      data (object)

    RETURN
      Promise
*/
const getSkillByAcronym = data => {

  if (!data.grade) data.grade = null;
  if (!data.chapter) data.chapter = null;
  if (!data.skill) data.skill = null;
  if (!data.subskill) data.subskill = null;

  return controller
  .findOne({
    where: {
      grade: data.grade,
      chapter: data.chapter,
      skill: data.skill,
      subskill: data.subskill
    }
  });
};

/*  Retrieve all skills.

    PARAMS
			none

    RETURN
      Promise
*/
const getAllSkills = () => {

  return controller
  .findAll({
    raw: true
  });
};

module.exports = {
  createSkill: createSkill,
  deleteSkill: deleteSkill,
  updateSkill: updateSkill,
  getSkill: getSkill,
	getSkillByAcronym: getSkillByAcronym,
  getAllSkills: getAllSkills
};
