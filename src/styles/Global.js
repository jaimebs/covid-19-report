import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
      padding: 0;
      margin: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body, #root{
      font-family: 'Baloo Bhaina 2', cursive;
      background-color: #F1F2F4;
    }
`;
