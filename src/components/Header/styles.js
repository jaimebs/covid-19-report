import styled from 'styled-components';

export const Container = styled.header`
  background-color: #a7b6da;
  height: 143px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 1px 10px rgba(59, 43, 91, 0.7);

  img {
    height: 126px;
    margin: 0 25px;
  }

  h1 {
    font-size: 40px;

    @media (max-width: 441px) {
      line-height: 39px;
      text-align: center;
    }
  }
`;
