#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { ConfigureCommand } = require('./commands/configure')
const { DefaultCommand } = require('./commands/default')

const argv = yargs(process.argv.slice(2))
  // default command line
  .command(new DefaultCommand())
  .command(new ConfigureCommand())
  .argv
