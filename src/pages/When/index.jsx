import React from 'react';

function When({ count }) {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
      }}>
      <h1>Contador: {count}</h1>
    </div>
  );
}

export default When;
