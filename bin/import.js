#!/usr/bin/env node

const logger = require('../api/helpers/logger');
const program = require('commander');
const fs = require('fs');
const processCharges = require("./processCharges.js")

program
  .option('-f, --filename <required>', 'filename required')
  .version('1.1.0')
  .parse(process.argv);

process.on('uncaughtException', (err) => {
  console.log("uncaughtException")
  logger.error('Unexpected Error', err);
  process.exit(1);
});
  
processCharges.readChargeFile(program.filename)