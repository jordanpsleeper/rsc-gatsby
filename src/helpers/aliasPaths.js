const tsconfig = require('../../tsconfig.json');
const path = require('path');

const aliases = Object.entries(tsconfig.compilerOptions.paths).reduce((acc, value) => {
  const [key, pathValue] = value.flat().map((i) => i.replace('/*', ''));
  acc[key] = path.resolve(pathValue);
  return acc;
}, {});

module.exports = aliases;
