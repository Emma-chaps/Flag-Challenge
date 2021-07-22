import React from 'react';
import { NavLink } from 'react-router-dom';

const menu = () => (
  <header className="navigation">
    <NavLink to="/">
      <h1 className="navigation--title">Where in the world ?</h1>
    </NavLink>
    <div className="navigation__btn">
      <i className="far fa-moon" />
      <span className="navigation__btn--name"> Dark Mode</span>
    </div>
  </header>
);

menu.propTypes = {};

export default menu;
