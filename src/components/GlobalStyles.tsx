import { createGlobalStyle, css } from 'styled-components';

const styles = css`
  @font-face {
    font-family: 'proxima-nova';
    src: url('https://use.typekit.net/af/925423/00000000000000003b9b038f/27/l?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n7&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/925423/00000000000000003b9b038f/27/d?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n7&v=3')
        format('woff'),
      url('https://use.typekit.net/af/925423/00000000000000003b9b038f/27/a?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n7&v=3')
        format('opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: 'proxima-nova';
    src: url('https://use.typekit.net/af/219c30/00000000000000003b9b0389/27/l?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n4&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/219c30/00000000000000003b9b0389/27/d?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n4&v=3')
        format('woff'),
      url('https://use.typekit.net/af/219c30/00000000000000003b9b0389/27/a?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n4&v=3')
        format('opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 400;
  }
  @font-face {
    font-family: 'museo-slab';
    src: url('https://use.typekit.net/af/53dec0/0000000000000000000100fe/27/l?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n3&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/53dec0/0000000000000000000100fe/27/d?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n3&v=3')
        format('woff'),
      url('https://use.typekit.net/af/53dec0/0000000000000000000100fe/27/a?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n3&v=3')
        format('opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: 'museo-slab';
    src: url('https://use.typekit.net/af/c225e2/000000000000000000011aff/27/l?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n7&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/c225e2/000000000000000000011aff/27/d?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n7&v=3')
        format('woff'),
      url('https://use.typekit.net/af/c225e2/000000000000000000011aff/27/a?primer=b997bcdf54b83a9f7b731c29130c4fbe326c83acb7cf220896c6041d3c02ba6a&fvd=n7&v=3')
        format('opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 700;
  }
  @font-face {
    font-family: 'museo-sans';
    src: url('https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/l?subset_id=2&fvd=n3&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/d?subset_id=2&fvd=n3&v=3')
        format('woff'),
      url('https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/a?subset_id=2&fvd=n3&v=3')
        format('opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: 'museo-sans';
    src: url('https://use.typekit.net/af/a28b50/00000000000000000000e803/27/l?subset_id=2&fvd=n5&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/a28b50/00000000000000000000e803/27/d?subset_id=2&fvd=n5&v=3')
        format('woff'),
      url('https://use.typekit.net/af/a28b50/00000000000000000000e803/27/a?subset_id=2&fvd=n5&v=3')
        format('opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 500;
  }
  @font-face {
    font-family: 'museo-sans';
    src: url('https://use.typekit.net/af/e3ca36/00000000000000000000e805/27/l?subset_id=2&fvd=n7&v=3')
        format('woff2'),
      url('https://use.typekit.net/af/e3ca36/00000000000000000000e805/27/d?subset_id=2&fvd=n7&v=3')
        format('woff'),
      url('https://use.typekit.net/af/e3ca36/00000000000000000000e805/27/a?subset_id=2&fvd=n7&v=3')
        format('opentype');
    font-display: auto;
    font-style: normal;
    font-weight: 700;
  }

  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    line-height: ${({ theme }) => theme.lineHeight};
    -webkit-text-size-adjust: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.sansFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.gray[500]};
    background-color: ${({ theme }) => theme.colors.gray[200]};
    margin: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a {
    color: ${({ theme }) => theme.colors.blue.petsblue};
    cursor: pointer;
    background: transparent;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles};
`;

export default GlobalStyles;
