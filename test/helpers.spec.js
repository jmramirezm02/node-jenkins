'use strict';
const Helpers = require('../services/Helpers');
const assert    = require("chai").assert;

describe('Validations for helper functions', () => {
    after(() => {
        process.exit();
    });

   it('Should return true when data is presented', () => {
       const isNull = Helpers.notNull('Hola amigo');
       assert.equal(isNull, true);
   })
});