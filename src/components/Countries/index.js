import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, Select } from './styles';

export default function Countries() {
  const [dataCountries, setDataCountries] = useState([]);
  useEffect(() => {
    async function getDatasCountries() {
      const { data } = await api.get('countries');
      setDataCountries(data.countries);
    }
    getDatasCountries();
  }, []);

  function handleCountries() {
    // console.log(e.target.value);
  }

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
