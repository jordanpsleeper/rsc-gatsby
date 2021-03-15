import React from 'react';
import Wrap from '~components/Wrap';

const DefaultLayout = ({ children }) => (
  <>
    <Wrap as='main'>{children}</Wrap>
  </>
);

export default DefaultLayout;
