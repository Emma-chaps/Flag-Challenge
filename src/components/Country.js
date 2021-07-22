/* eslint-disable arrow-body-style */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { numberFormat } from '../utils';

const Country = ({
  name: countryName,
  population,
  region,
  capital,
  flag,
  alpha3Code,
}) => {
  return (
    <NavLink
      to={{
        pathname: `/flag/${alpha3Code}`,
        flagDetail: {
          countryName,
          population,
          region,
          capital,
          flag,
          alpha3Code,
        },
      }}
    >
      <article className="card-container">
        <img
          className="card-container--img"
          src={flag}
          alt={`drapeau de ${countryName}`}
        />
        <h2 className="card-container--title">{countryName}</h2>
        <div className="card-container__details">
          <div className="card-container__details--population">
            <em>Population: </em>
            {numberFormat(population)}
          </div>
          <div className="card-container__details--region">
            <em>Region: </em>
            {region}
          </div>
          <div className="card-container__details--capital">
            <em>Capital: </em>
            {capital}
          </div>
        </div>
      </article>
    </NavLink>
  );
};

Country.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  alpha3Code: PropTypes.string.isRequired,
};

export default Country;
