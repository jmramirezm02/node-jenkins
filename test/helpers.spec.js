'use strict';
const Helpers = require('../services/Helpers');
const assert    = require("chai").assert;

describe('Validations for helper functions', () => {
    after(() => {
        process.exit();
    });

   it('Should return true when data is presented', () => {
       const result = Helpers.notNull('Hola amigo');
       assert.equal(result, true);
   })
});