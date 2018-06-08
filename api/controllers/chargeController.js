'use strict';

const chargeService = require('../services/chargeService');

/**
 * Swagger Controller method for GET /charges/build/:numCharges Endpoint
 */
function build(req, res) {
  const { numCharges } = req.params;
  chargeService.build(numCharges, (err, message) => {
    if (err) {
      res.status(400).json({ code: 400, message: err.message }).end();
    } else {
      res.status(200).json({ code: 200, message: message }).end();
    }
  });
}

/**
 * Swagger Controller method for GET /charges/retrieve Endpoint
 */
function retrieve(req, res) {
  chargeService.retrieve((err, data) => {
    if (err) {
      res.status(400).json({ code: 400, message: err.message }).end();
    } else {
      const toReturn = {
        code: 200,
        message: data.message,
        charges: data.charges
      };
      res.status(200).json(toReturn).end();
    }
  });
}

module.exports = {
  build: build,
  retrieve: retrieve
};
