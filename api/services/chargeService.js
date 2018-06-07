'use strict';

const _ = require('lodash');
const fs = require('fs');
const moment = require('moment');
const path = require('path');

function createCharge(appName) {
  const chargeObj = {
    amount: _.sample([100, 250, 500, 750, 1000]),
    date: moment().subtract(_.random(0, 180), 'days').format(),
    name: appName,
    description: 'Annual renewal for company licenses.',
    type: 'AP'
  };

  return chargeObj;
}

function checkDirectoryPath(filePath) {
  console.log(filePath)
  if(fs.existsSync(filePath)) {
    return true;
  } else {
    fs.mkdirSync(filePath)
    console.log("path made")
  }
}

function build(numCharges, cb) {
  const apps = ['Salesforce CRM', 'Adobe Creative Cloud', 'JIRA', 'GitHub', 'Sentry', 'AWS', 'Slack'];
  const charges = [];
  for (let i = 0; i < numCharges; i++) {
    const appName = _.sample(apps);
    charges.push(createCharge(appName));
  }

  try {
    const chargeFilePath = `${__dirname}/../../temp/`;
    checkDirectoryPath(chargeFilePath);
    fs.writeFileSync(`${chargeFilePath}/charges.json`, JSON.stringify(charges));
    cb(null, 'Successfully created charge file.');
  } catch (e) {
    cb(new Error('Failed to created charge file.'));
  }
}

module.exports = {
  build: build,
  createCharge: createCharge
};
