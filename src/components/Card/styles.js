import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const Painel = styled.div`
  width: 350px;
  margin: 0 30px;
  background-color: #fff;
  padding: 20px;
  border-bottom: 3px solid ${props => props.colorBorderBottom};
  border-radius: 2px;

  p {
    font-size: 20px;
  }

  .updateDate {
    font-size: 20px;
    color: #a8a8b3;
  }

  .countUp {
    font-size: 32px;
    font-weight: bold;
  }
`;
