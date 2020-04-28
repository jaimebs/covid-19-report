import React from 'react';
import { Header, Card, Countries } from './components';
import { CountriesProvider } from './context/countriesContext';
import GlobalStyle from './styles/Global';

function App() {
  return (
    <>
      <CountriesProvider>
        <Header />
        <Card />
        <Countries />
      </CountriesProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
