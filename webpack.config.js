const path = require('path')
const fs = require('fs')

function getEntries() {
  const reg = /\.vue$/
  return fs.readdirSync(path.resolve(__dirname, './src/components'))
    .filter(filename => reg.test(filename) && !fs.statSync(path.resolve(__dirname, './src/components', filename)).isDirectory())
    .map(filename => ({
      name: [filename.replace(reg, '')],
      filename: path.resolve(__dirname, './src/components', filename),
    }))
}

const config = {
  mode: 'production',
  entry: { index: './src/index.js' },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: './[name].js',
    library: 'ModuleName',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
}

module.exports = config
