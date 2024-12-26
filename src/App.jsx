import React, { useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './layout'; // Import the Layout
import routes from './router/routes';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Layout>
        <Routes>{routes(count, setCount)}</Routes>
      </Layout>
    </Router>
  );
};

export default App;
