import React from 'react';
import PropTypes from 'prop-types';

const menu = (props) => {
  return (
    <header className="navigation">
      <h1 className="navigation--title">Where in the world ?</h1>
      <button className="navigation__btn" type="button">
        <i className="far fa-moon"></i>
        <span className="navigation__btn--name"> Dark Mode</span>
      </button>
    </header>
  );
};

menu.propTypes = {};

export default menu;
