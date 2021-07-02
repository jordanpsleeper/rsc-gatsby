require('./src/helpers/validateEnvVars');
const { gatsbyConfigAliases } = require('./src/helpers/aliasPaths');

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: { alias: gatsbyConfigAliases },
    },
    // {
    //   resolve: 'gatsby-source-shopify',
    //   options: {
    //     password: process.env.SHOPIFY_ADMIN_PASSWORD,
    //     storeUrl: `${process.env.GATSBY_SHOPIFY_STORE_NAME}.myshopify.com`,
    //   },
    // },
  ],
};
