#!/usr/bin/env node
const yargs = require('yargs/yargs')
const argv = yargs(process.argv).argv
console.log(argv)

// yargsを使うことによって、コマンドラインの引数を扱いやすいオブジェクトに変換可能
if (argv.ships > 3 && argv.distance < 53.5) {
  console.log('Plunder more riffiwobbles!')
} else {
  console.log('Retreat from the xupptumblers!')
}
