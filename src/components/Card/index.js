import React, { useState, useEffect, useCallback } from 'react';
import CountUp from 'react-countup';
import api from '../../services/api';
import { useCountries } from '../../context/countriesContext';
import { Container, Painel } from './styles';

export default function Card() {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState('');

  const {
    country,
    setConfirmedCtx,
    setRecoveredCtx,
    setDeathsCtx,
  } = useCountries();

  const getDatasCovid19 = useCallback(async () => {
    const urlCountrie = country ? `countries/${country}` : '';

    const { data } = await api.get(urlCountrie);
    setConfirmed(data.confirmed.value);
    setRecovered(data.recovered.value);
    setDeaths(data.deaths.value);
    setLastUpdate(data.lastUpdate);

    setConfirmedCtx(data.confirmed.value);
    setRecoveredCtx(data.recovered.value);
    setDeathsCtx(data.deaths.value);
  }, [country, setConfirmedCtx, setRecoveredCtx, setDeathsCtx]);

  useEffect(() => {
    getDatasCovid19();
  }, [country, getDatasCovid19]);

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
          <p className="updateDate">
            Atualizado em {new Date(lastUpdate).toLocaleDateString()}
          </p>
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
          <p className="updateDate">
            Atualizado em {new Date(lastUpdate).toLocaleDateString()}
          </p>
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
          <p className="updateDate">
            Atualizado em {new Date(lastUpdate).toLocaleDateString()}
          </p>
        </Painel>
      </Container>
    </>
  );
}
