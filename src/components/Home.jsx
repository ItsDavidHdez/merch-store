import React from 'react';
import Products from './Products';
import InitialState from '../initialState';

const Home = () => {
  return (
    <>
      <Products products={InitialState.products} />
    </>
  );
};

export default Home;
