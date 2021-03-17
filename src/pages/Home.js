import React from 'react';
import PropTypes from 'prop-types';
import Countries from '../components/Countries';
import Navigation from '../components/Navigation';

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
