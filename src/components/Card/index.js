import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import api from '../../services/api';
import { Container, Painel } from './styles';

export default function Card() {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);

  async function getDatasCovid19() {
    const { data } = await api.get();
    setConfirmed(data.confirmed.value);
    setRecovered(data.recovered.value);
    setDeaths(data.deaths.value);
  }

  useEffect(() => {
    getDatasCovid19();
  }, []);

  return (
    <>
      <Container>
        <Painel colorBorderBottom="blue">
          <CountUp
            start={0}
            end={confirmed}
            duration={2.75}
            separator=","
            className="countUp"
          />
          <p>Número de casos confirmados</p>
        </Painel>
        <Painel colorBorderBottom="green">
          <CountUp
            start={0}
            end={recovered}
            duration={2.75}
            separator=","
            className="countUp"
          />
          <p>Número de pessoas recuperadas</p>
        </Painel>
        <Painel colorBorderBottom="red">
          <CountUp
            start={0}
            end={deaths}
            duration={2.75}
            separator=","
            className="countUp"
          />
          <p>Número de mortos</p>
        </Painel>
      </Container>
    </>
  );
}
