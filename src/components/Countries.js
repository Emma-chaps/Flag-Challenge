import React, { useEffect, useState } from 'react';
import api from 'src/api';
import Country from './Country';

const Countries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [color, setColor] = useState('dark');
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const fetchDataByInput = async () => {
    try {
      const res = await api.get('/all');
      const filteredResult = res.data.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setAllCountries(filteredResult);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataBySelect = async (region) => {
    try {
      const res = await api.get(`/region/${region}`);
      setAllCountries(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeInput = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setSelectedRegion('');
  };

  const handleChangeSelect = (event) => {
    const { value } = event.target;
    setSelectedRegion(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (selectedRegion !== '') {
      fetchDataBySelect(selectedRegion);
    }
    fetchDataByInput();
  }, [inputValue, selectedRegion]);

  return (
    <main className="main-container">
      <div className="main-container__form-container">
        <form
          className="main-container__form-container__form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="searchInput">
            <input
              className="main-container__form-container__form--input"
              type="text"
              id="searchInput"
              placeholder="Search for a country..."
              onChange={handleChangeInput}
              value={inputValue}
            />
            <i className="fas fa-search search-icon" />
          </label>
          <label htmlFor="selectRegion">
            <select
              name="region"
              id="selectRegion"
              className="main-container__form-container__form--select"
              onChange={handleChangeSelect}
            >
              <option value="">Filter by Region</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
      <div className="main-container__flag-container">
        {allCountries.map((country) => (
          <Country key={country.alpha3Code} {...country} />
        ))}
      </div>
    </main>
  );
};

export default Countries;
