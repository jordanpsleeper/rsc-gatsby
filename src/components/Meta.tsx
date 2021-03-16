import React from 'react';
import Helmet from 'react-helmet';

const Meta = ({ description, lang, meta, pageTitle, keywords, children }) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={`${pageTitle}`}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
      {
        name: 'robots',
        content: process.env.GATSBY_ROBOTS,
      },
      ...meta,
    ]}
  >
    {children}
  </Helmet>
);

Meta.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
  pageTitle: '-',
  keywords: '',
};

export default Meta;
