import React, { useState, createContext, useContext } from 'react';

const CountriesContext = createContext();

// eslint-disable-next-line react/prop-types
export const CountriesProvider = ({ children }) => {
  const [country, setCountry] = useState();
  const [confirmedCtx, setConfirmedCtx] = useState(0);
  const [recoveredCtx, setRecoveredCtx] = useState(0);
  const [deathsCtx, setDeathsCtx] = useState(0);

  return (
    <CountriesContext.Provider
      value={{
        country,
        setCountry,
        confirmedCtx,
        setConfirmedCtx,
        recoveredCtx,
        setRecoveredCtx,
        deathsCtx,
        setDeathsCtx,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export function useCountries() {
  const context = useContext(CountriesContext);
  return context;
}

export default CountriesContext;
