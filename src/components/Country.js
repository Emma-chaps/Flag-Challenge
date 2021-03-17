/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ name, population, region, capital, flag }) => {
  return (
    <article className="card-container">
      <img
        className="card-container--img"
        src={flag}
        alt={`drapeau de ${name}`}
      />
      <h2 className="card-container--title">{name}</h2>
      <div className="card-container__details">
        <div className="card-container__details--population">
          <em>Population: </em>
          {population}
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
  );
};

Country.propTypes = {};

export default Country;
