import React from 'react';
import PropTypes from 'prop-types';

const menu = (props) => {
  return (
    <header>
      <h1>Where in the world ?</h1>
      <button type="button">
        <i className="far fa-moon"></i>
        <span> Dark Mode</span>
      </button>
    </header>
  );
};

menu.propTypes = {};

export default menu;
