class DefaultCommand {
  command = '$0'

  handler(){
    console.log('default command')
  }
}

module.exports = { DefaultCommand }
