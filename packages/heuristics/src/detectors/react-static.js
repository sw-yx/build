const { hasRequiredDeps, hasRequiredFiles, getPackageManagerCommand, scanScripts } = require('../utils/jsdetect')
module.exports = function(projectDir) {
  // REQUIRED FILES
  if (!hasRequiredFiles(['package.json', 'static.config.js'], projectDir)) return false
  // REQUIRED DEPS
  if (!hasRequiredDeps(['react-static'], projectDir)) return false

  /** everything below now assumes that we are within react-static */

  const possibleArgsArrs = scanScripts({
    preferredScriptsArr: ['start', 'develop', 'dev'],
    preferredCommand: 'react-static start',
  })

  if (possibleArgsArrs.length === 0) {
    // ofer to run it when the user doesnt have any scripts setup! 🤯
    possibleArgsArrs.push(['react-static', 'start'])
  }
  return {
    framework: 'react-static',
    language: 'js',
    command: getPackageManagerCommand(projectDir),
    port: 8888,
    proxyPort: 3000,
    env: { ...process.env },
    possibleArgsArrs,
    urlRegexp: new RegExp(`(http://)([^:]+:)${3000}(/)?`, 'g'),
    dist: 'dist',
  }
}