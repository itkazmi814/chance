'use strict';

const _ = require('lodash');
const fs = require('fs');
const moment = require('moment');
const Charge = require('../../models/Charge');

function createCharge(appName) {
  return {
    amount: _.sample([100, 250, 500, 750, 1000]),
    date: moment().subtract(_.random(0, 180), 'days').format(),
    name: appName,
    description: 'Annual renewal for company licenses.',
    type: 'AP'
  };
}

function buildChargeFile(charges) {
  const chargeFilePath = `${__dirname}/../../temp/`;

  if (!fs.existsSync(chargeFilePath)) {
    fs.mkdirSync(chargeFilePath);
  }

  fs.writeFileSync(`${chargeFilePath}/charges.json`, JSON.stringify(charges));
}

function build(numCharges, cb) {
  const apps = ['Salesforce CRM', 'Adobe Creative Cloud', 'JIRA', 'GitHub', 'Sentry', 'AWS', 'Slack'];
  const charges = [];
  for (let i = 0; i < numCharges; i++) {
    const appName = _.sample(apps);
    charges.push(createCharge(appName));
  }

  try {
    buildChargeFile(charges);
    cb(null, 'Successfully created charge file.');
  } catch (e) {
    cb(new Error('Failed to created charge file.'));
  }
}

async function retrieve(cb) {
  try {
    const charges = await Charge
      .query()
      .select('amount', 'name', 'type', 'description')
      .count('id')
      .groupBy('amount', 'name', 'type', 'description')
      .orderBy('name')
      .orderBy('amount', 'desc');

    const data = {
      message: 'Successfully retrieved charges from databse.',
      charges: charges
    };

    cb(null, data);
  } catch (e) {
    cb(new Error('Failed to retrieve charges from database.'));
  }
}

module.exports = {
  build: build,
  retrieve: retrieve
};
