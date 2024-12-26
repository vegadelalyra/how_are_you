import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../pages/Home';
import How from '../pages/How';
import Why from '../pages/Why';
import When from '../pages/When';

const routes = (count, setCount) => [
  <Route key='/' path='/' element={<Home />} />,
  <Route
    key='/how'
    path='/how'
    element={
      <PrivateRoute>
        <How setCount={setCount} />
      </PrivateRoute>
    }
  />,
  <Route key='/why' path='/why' element={<Why />} />,
  <Route key='/when' path='/when' element={<When count={count} />} />,
];

export default routes;
