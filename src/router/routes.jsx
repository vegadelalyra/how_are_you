import React from 'react';
import { Route } from 'react-router-dom';
import { Home, How, When, Why } from '../pages';
import PrivateRoute from './PrivateRoute';

const routes = ({ count, setCount }) => [
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
