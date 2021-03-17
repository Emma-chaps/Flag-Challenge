import React from 'react';
import Countries from '../components/Countries';
import Navigation from '../components/Navigation';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <div>
      <Navigation />
      <Countries />
    </div>
  );
};

Home.propTypes = {};

export default Home;
