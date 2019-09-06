const shellExec = require('shell-exec')

const packages = [
  '@iuap/eslint-config',
  'babel-eslint',
  'eslint',
  'eslint-config-standard',
  'eslint-config-standard-react',
  'eslint-plugin-import',
  'eslint-plugin-node',
  'eslint-plugin-promise',
  'eslint-plugin-react',
  'eslint-plugin-standard'
]

const cmd = 'npm install -g ' + packages.join(' ') 

console.log(cmd)

shellExec(cmd)
  .then((msg) => {
    console.log('complete!')
  })
  .catch(console.error)