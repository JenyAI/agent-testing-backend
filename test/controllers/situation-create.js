'use strict';

let expect = require('chai').expect;

const situationsController = require('../../controllers/situations');

describe('situation controller', () => {
  describe('create & delete', () => {
    it('should create and delete a situation', done => {
      let data = {
        intentName: 'Default Fallback Intent',
        utterance: 'bla',
      };

      situationsController.createSituation(data, (err, situation) => {

        if (err) {
          expect(true).to.equal(false);
          done();
        } else {
          situationsController.deleteSituation(situation.dataValues.id, err => {
            if (err) {
              expect(true).to.equal(false);
            } else {
              expect(true).to.equal(true);
            }

            done();
          })
        }
      })
    });

    it('should not create a situation', done => {
      let data = {
        intentName: 'Default Fallback Intent',
      };

      situationsController.createSituation(data, (err, situation) => {

        if (err) {
          expect(true).to.equal(true);
        } else {
          expect(true).to.equal(false);
        }

        done();
      })
    });
  });
});
