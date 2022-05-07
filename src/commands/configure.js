class ConfigureCommand {
  command = "configure <key> [value]"
  alias = ["config", "cfg"]

  builder(yargs){
    yargs.default('value', 'true')
  }

  handler(argv){
    console.log(`setting ${argv.key} to ${argv.value}`)
  }
}

module.exports = { ConfigureCommand }
