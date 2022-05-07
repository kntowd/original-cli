#!/usr/bin/env node
const yargs = require('yargs/yargs')

const argv = yargs(process.argv.slice(2))
  // default command line
  .command('$0', 'the default command', () => {}, (argv) => {
    console.log('this command will be run by default')
  })
  .command({
    // key is optional. but value option is required.
    // command ex) original-cli configure foo(optional) hoge(required)
    command: 'configure <key> [value]',
    aliases: ['config', 'cfg'],
    desc: 'Set a config variable',
    builder: (yargs) => yargs.default('value', 'true'),
    handler: (argv) => {
      console.log(`setting ${argv.key} to ${argv.value}`)
    }
  })
  .argv
