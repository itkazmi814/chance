const router = require('express').Router();
const chargeController = require('../controllers/chargeController');

module.exports = app => {
  app.get('/charges/build/:numCharges', (req, res) => {
    chargeController.build(req, res);
  });

  app.get('/charges/retrieve', (req, res) => {
    chargeController.retrieve(req, res);
  });
}