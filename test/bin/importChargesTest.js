'use strict';

const assert = require('assert');
const fs = require('fs');
const logger = require('../../api/helpers/logger');
const { Model } = require('objection');
const pgCredentials = require('../../db/pgCredentials');
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

describe('importCharges', () => {
  const chargeFileDir = `${__dirname}/../../temp`;
  const chargeFile = `${chargeFileDir}/charges.json`;

  it('should validate the temp folder exists', () => {
    const dirExists = fs.existsSync(chargeFileDir);
    assert.equal(true, dirExists);
  });

  it('should validate temp/charges.json exists', () => {
    const fileExists = fs.existsSync(chargeFile);
    assert.equal(true, fileExists);
  });

  it('should validate temp/charges.json has a proper charge record', () => {
    fs.readFile(chargeFile, 'utf-8', (err, data) => {
      if (err) throw err;
      const charge = JSON.parse(data)[0];
      const exampleCharge = {
        amount: 250,
        date: '2018-04-20T22:55:30-05:00',
        name: 'AWS',
        description: 'Annual renewal for company licenses.',
        type: 'AP'
      };

      assert.equal(typeof exampleCharge.amount, typeof charge.amount);
      assert.equal(exampleCharge.length, charge.date.length);
      assert.equal(typeof exampleCharge.name, typeof charge.name);
      assert.equal(exampleCharge.description, charge.description);
      assert.equal(exampleCharge.type, charge.type);
    });
  });

  it('should validate that a connection has been made to Postgres', () => {
    const isConnected = knex.client.pool.validate(knex);
    assert.equal(true, isConnected);
  });
});
