import React from 'react';
import { Container } from './styles';
import imgCovid from '../../assets/covid-19.svg';

export default function Header() {
  return (
    <>
      <Container>
        <img src={imgCovid} alt="Covid-19" />
        <h1>Covid-19 Report</h1>
      </Container>
    </>
  );
}
