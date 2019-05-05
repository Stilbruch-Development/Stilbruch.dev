import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* poiret-one-regular - latin */
  @font-face {
    font-family: 'Poiret One';
    font-style: normal;
    font-weight: 400;
    src: url(${require("../../font/poiret-one-v7-latin-regular.eot")}); /* IE9 Compat Modes */
    src: local('Poiret One'), local('PoiretOne-Regular'),
        url(${require("../../font/poiret-one-v7-latin-regular.eot?#iefix")}) format('embedded-opentype'), /* IE6-IE8 */
        url(${require("../../font/poiret-one-v7-latin-regular.woff2")}) format('woff2'), /* Super Modern Browsers */
        url(${require("../../font/poiret-one-v7-latin-regular.woff")}) format('woff'), /* Modern Browsers */
        url(${require("../../font/poiret-one-v7-latin-regular.ttf")}) format('truetype'), /* Safari, Android, iOS */
        url(${require("../../font/poiret-one-v7-latin-regular.svg")}) format('svg'); /* Legacy iOS */
  }

  html, body {
    /* background: linear-gradient(to bottom right, #181818, #505050);
    background-color: rgb(24, 24, 24); */
    background-image: linear-gradient( 135deg, #181818 10%, #505050 90%);
    font-family: "Poiret One", Arial;
    color: #000000;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 1vw;
    z-index: -1;
  }

  /* hides all scrollbars */
  .displayNone,
  ::-webkit-scrollbar {
    display: none !important;
  }

  hr {
    border: 0;
    margin: 1rem 0 0 0;
    height: 2px;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0),
      red,
      rgba(255, 0, 0, 0)
    );
  }
`;
export default GlobalStyle;
