import React, { useState, useEffect, useContext, useCallback } from 'react';
import api from '../../services/api';
import CountriesContext from '../../context/countriesContext';
import { Container, Select } from './styles';

export default function Countries() {
  const [dataCountries, setDataCountries] = useState([]);
  const { setCountrie } = useContext(CountriesContext);

  useEffect(() => {
    async function getDatasCountries() {
      const { data } = await api.get('countries');
      setDataCountries(data.countries);
    }
    getDatasCountries();
  }, []);

  const handleCountries = useCallback(e => {
    setCountrie(e.target.value);
  });

  return (
    <>
      <Container>
        <Select onChange={e => handleCountries(e)}>
          <option value="">Global</option>
          {dataCountries.map(item => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </Select>
      </Container>
    </>
  );
}
