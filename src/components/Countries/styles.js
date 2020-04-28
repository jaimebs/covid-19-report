import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px 0;
`;

export const Select = styled.select`
  width: 1170px;
  height: 32px;
  padding: 0 4px;
  border: 0;
  font-family: 'Baloo Bhaina 2', cursive;
  font-size: 18px;
  border-radius: 2px;
  font-weight: bold;

  @media (max-width: 1217px) {
    margin: 0 30px;
  }
`;
