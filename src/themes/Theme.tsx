import React from 'react';
import { ThemeProvider } from 'styled-components';

const petsafe = {
  lineHeight: 1.125,
  fonts: {
    serifFont: 'museo-slab,serif',
    sansFont: 'proxima-nova,sans-serif',
    museoFont: 'museo-sans,sans-serif',
  },
  colors: {
    gray: {
      100: '#f2f2f2',
      200: '#e8e8e8',
      300: '#cccccc',
      500: '#5d5d5d',
    },
    blue: {
      200: '#8096a7',
      300: '#c4e6ff',
      400: '#4694CA',
      500: '#0283e2',
      petsafeblue: '#0160a6',
      700: '#00467D',
      800: '#003561',
    },
  },
  breakpoints: {
    sm: '640px', // landscape mobile
    md: '768px', // tablet
    lg: '1024px', // tablet landscape
    xl: '1280px', // desktop
  },
};

const Theme = ({ children }) => <ThemeProvider theme={petsafe}>{children}</ThemeProvider>;

export default Theme;
