require('dotenv').config();
const path = require('path');

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-source-shopify',
    //   options: {
    //     shopName: process.env.GATSBY_SHOPIFY_SHOP_NAME,
    //     accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
    //     apiVersion: process.env.GATSBY_SHOPIFY_API_VERSION,
    //     verbose: false,
    //     paginationSize: 50,
    //     includeCollections: ['shop', 'content'],
    //     downloadImages: false,
    //   },
    // },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '~components': path.resolve(__dirname, 'src/components'),
        },
      },
    },
  ],
};
