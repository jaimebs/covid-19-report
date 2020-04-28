import React, { useState, createContext } from 'react';

const CountriesContext = createContext();

// eslint-disable-next-line react/prop-types
export const CountriesProvider = ({ children }) => {
  const [countrie, setCountrie] = useState();

  return (
    <CountriesContext.Provider value={{ countrie, setCountrie }}>
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
