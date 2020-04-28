import React from 'react';
import { Header, Card, Countries, Chart } from './components';
import { CountriesProvider } from './context/countriesContext';
import GlobalStyle from './styles/Global';

function App() {
  return (
    <>
      <CountriesProvider>
        <Header />
        <Card />
        <Countries />
        <Chart />
      </CountriesProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
