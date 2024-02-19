
const baseConfig = require('./webpack.base.js')
const path = require('path')


module.exports = [
  {
    ...baseConfig,
    name: 'esm',
    output: {
      path: path.resolve(__dirname, '../dist/esm'),
      filename: 'index.js',
      libraryTarget: 'module',
      chunkFormat: 'module',
    },
    experiments: {
      outputModule: true,
    }
  },
  {
    ...baseConfig,
    name: 'cjs',
    output: {
      path: path.resolve(__dirname, '../dist/cjs'),
      filename: 'index.js',
      libraryTarget: 'commonjs',
    },
  },
  {
    ...baseConfig,
    name: 'umd',
    output: {
      path: path.resolve(__dirname, '../dist/umd'),
      filename: 'index.js',
      libraryTarget: 'umd',
    },
  },
  {
    ...baseConfig,
    name: 'iife',
    output: {
      path: path.resolve(__dirname, '../dist/iife'),
      filename: 'index.js',
      iife: true
    },
  },
];
