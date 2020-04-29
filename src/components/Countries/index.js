import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';
import { useCountries } from '../../context/countriesContext';
import { Container, Select } from './styles';

export default function Countries() {
  const [dataCountries, setDataCountries] = useState([]);
  const { setCountry } = useCountries();

  useEffect(() => {
    async function getDatasCountries() {
      const { data } = await api.get('countries');
      setDataCountries(data.countries);
    }
    getDatasCountries();
  }, []);

  const handleCountries = useCallback(
    e => {
      setCountry(e.target.value);
    },
    [setCountry],
  );

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
