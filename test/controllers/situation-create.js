'use strict';

let expect = require('chai').expect;

const situationsController = require('../../controllers/situations');

describe('situation create', () => {
  it('should create a situation', done => {
    let data = {
      intentName: 'Default Fallback Intent',
      utterance: 'bla',
    };

    situationsController.createSituation(data, err => {
      if (err) {
        expect(true).to.equal(false);
      } else {
        expect(true).to.equal(true);
      }

      done();
    })
  });

  it('should create a situation w/ empty utterance', done => {
    let data = {
      intentName: 'Default Fallback Intent',
      utterance: '',
    };

    situationsController.createSituation(data, err => {
      if (err) {
        expect(true).to.equal(false);
      } else {
        expect(true).to.equal(true);
      }

      done();
    })
  });
});
