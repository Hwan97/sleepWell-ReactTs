import reset from 'styled-reset';
import styled, { createGlobalStyle, css } from 'styled-components';
import palette from './palette';

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    color: ${palette.black};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle};
`;

export default GlobalStyle;