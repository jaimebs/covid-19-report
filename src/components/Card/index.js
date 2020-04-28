import React, { useState, useEffect, useContext, useCallback } from 'react';
import CountUp from 'react-countup';
import api from '../../services/api';
import CountriesContext from '../../context/countriesContext';
import { Container, Painel } from './styles';

export default function Card() {
  const [confirmed, setConfirmed] = useState(0);
  const [recovered, setRecovered] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [lastUpdate, setLastUpdate] = useState('');

  const { countrie } = useContext(CountriesContext);

  const getDatasCovid19 = useCallback(async () => {
    const urlCountrie = countrie ? `countries/${countrie}` : '';

    const { data } = await api.get(urlCountrie);
    setConfirmed(data.confirmed.value);
    setRecovered(data.recovered.value);
    setDeaths(data.deaths.value);
    setLastUpdate(data.lastUpdate);
  });

  useEffect(() => {
    getDatasCovid19();
  }, [countrie]);

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
