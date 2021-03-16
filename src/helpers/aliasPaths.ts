const path = require('path');
const tsconfig = require('../../tsconfig.json');

// transforms
// "~components/*": ["./src/components/*"] => `~components/: path.resolve("./src/components")`
const aliases = Object.entries(tsconfig.compilerOptions.paths).reduce((acc, value: any[]) => {
  const [key, pathValue] = value.flat().map((i: string) => i.replace('/*', ''));
  acc[key] = path.resolve(pathValue);
  return acc;
}, {});

module.exports = aliases;
