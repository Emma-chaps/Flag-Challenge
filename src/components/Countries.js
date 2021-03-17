import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './Country';
import PropTypes from 'prop-types';

const Countries = (props) => {
  const [allCountries, setAllCountries] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`https://restcountries.eu/rest/v2/all`);
      setAllCountries(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div>
        <form action="">
          <label htmlFor="searchInput">
            <input
              type="text"
              placeholder="Search for a country..."
              id="searchInput"
            />
            <i className="fas fa-search"></i>
          </label>
          <label htmlFor="selectRegion">
            <select name="region" id="selectRegion">
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
      <div>
        {allCountries.map((country) => (
          <Country key={country.name} {...country} />
        ))}
      </div>
    </main>
  );
};

Countries.propTypes = {};

export default Countries;
