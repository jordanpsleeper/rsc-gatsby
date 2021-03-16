import React from 'react';
import getLayout from './getLayout';
import Meta from '~components/Meta';
import GlobalStyles from '~components/GlobalStyles';
import Theme from '~themes/Theme';

type LayoutProps = {
  layout?: string;
  seo?: any;
  children: React.ReactNode;
};

const Layout = ({ layout, seo, ...props }: LayoutProps) => {
  const PageLayout = getLayout(layout);

  return (
    <Theme>
      <GlobalStyles />
      <Meta {...seo} />
      <PageLayout {...props} />
    </Theme>
  );
};

Layout.defaultProps = {
  seo: {},
};

export default Layout;
