const sections = require('./src/gatsby/index.ts');

exports.createPages = async (helpers) => {
  await Promise.all(sections.map(({ createPages }) => createPages(helpers)));
};
