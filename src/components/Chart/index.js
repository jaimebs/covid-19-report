import React, { useState, useEffect, useContext } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import api from '../../services/api';
import CountriesContext from '../../context/countriesContext';
import { Container } from './styles';

export default function Chart() {
  const [dayli, setDaily] = useState([]);
  const { country, confirmedCtx, recoveredCtx, deathsCtx } = useContext(
    CountriesContext,
  );

  useEffect(() => {
    async function fetchDailyData() {
      const { data } = await api.get('daily');
      setDaily(data);
    }

    fetchDailyData();
  }, []);

  const barChart = confirmedCtx ? (
    <Bar
      data={{
        labels: ['Infectados', 'Recuperados', 'Mortos'],
        datasets: [
          {
            label: 'Pessoas',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmedCtx, recoveredCtx, deathsCtx],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Estado atual em ${country}` },
      }}
    />
  ) : null;

  const lineChart = dayli.length ? (
    <Line
      data={{
        labels: dayli.map(date =>
          new Date(date.reportDate).toLocaleDateString(),
        ),
        datasets: [
          {
            data: dayli.map(data => data.confirmed.total),
            label: 'Infectados',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dayli.map(data => data.deaths.total),
            label: 'Mortos',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <>
      <Container>{country ? barChart : lineChart}</Container>
    </>
  );
}
