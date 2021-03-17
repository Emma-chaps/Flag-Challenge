import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';
import PropTypes from 'prop-types';

const Countries = (props) => {
  const [allCountries, setAllCountries] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
      const filteredResult = res.data.filter((item) =>
        item.name.toLowerCase().includes(inputValue)
      );
      console.log(filteredResult);
      setAllCountries(filteredResult);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    fetchData();
  }, [inputValue]);

  return (
    <main className="main-container">
      <div className="main-container__form-container">
        <form
          action=""
          className="main-container__form-container__form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="searchInput">
            <input
              className="main-container__form-container__form--input"
              type="text"
              id="searchInput"
              placeholder="Search for a country..."
              onChange={handleChange}
              value={inputValue}
            />
            <i className="fas fa-search"></i>
          </label>
          <label htmlFor="selectRegion">
            <select
              name="region"
              id="selectRegion"
              className="main-container__form-container__form--select"
            >
              <option value="">Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
        </form>
      </div>
      <div className="main-container__flag-container">
        {allCountries.map((country) => (
          <Country key={country.name} {...country} />
        ))}
      </div>
    </main>
  );
};

Countries.propTypes = {};

export default Countries;
