var execSync = require('child_process').execSync

// Install pm2
var result = execSync(`npm install -g pm2 yarn`)
console.log(result)

// Register and start pm2
result = execSync('pm2 start /opt/heat-daemon')
console.log(result)

result = execSync('pm2 startup')
var resultLines = result.split('\n')
console.log(resultLines[1])

result = execSync(resultLines[1])
console.log(result)
