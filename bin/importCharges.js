#!/usr/bin/env node

'use strict';

const logger = require('../api/helpers/logger');
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

process.on('uncaughtException', (err) => {
  logger.error('Unexpected Error', err);
  process.exit(1);
});

const insertCharges = (chargeData) => {
  chargeData.forEach(async (charge, i) => {
    await Charge
      .query()
      .insert(charge);

    if (chargeData.length === i + 1) {
      process.exit(0);
    }
  });
};

const readChargeFile = (fileName) => {
  const pathName = `${__dirname}/../${fileName}`;

  fs.readFile(pathName, 'utf-8', (err, data) => {
    if (err) throw err;
    insertCharges(JSON.parse(data));
  });
};

readChargeFile(process.argv[3]);
