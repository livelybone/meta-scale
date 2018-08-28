const path = require('path')

const config = {
  mode: 'production',
  entry: { index: './src/index.js' },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: './[name].js',
    library: 'MetaScale',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
}

module.exports = config
