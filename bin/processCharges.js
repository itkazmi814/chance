'use strict';

const fs = require('fs');
const Charge = require('../models/Charge');
const { Model } = require('objection');

const pgCredentials = require('../db/pgCredentials');

const knex = require('knex')({
  client: 'pg',
  connection: {
    ...pgCredentials,
    database: 'zylo_chance'
  }
});

Model.knex(knex);

const checkForProcessExit = (isDone) => {
  if (isDone) {
    process.exit(0);
  }
};

const insertCharges = (chargeData) => {
  chargeData.forEach(async (charge, i) => {
    await Charge
      .query()
      .insert(charge);

    checkForProcessExit(chargeData.length === i + 1);
  });
};

const readChargeFile = (fileName) => {
  const pathName = `${__dirname}/../${fileName}`;

  fs.readFile(pathName, 'utf-8', (err, data) => {
    if (err) throw err;
    insertCharges(JSON.parse(data));
  });
};

module.exports = {
  readChargeFile: readChargeFile
};
