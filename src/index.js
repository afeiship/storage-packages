import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Hello blog readers</h1>
    </div>
  );
}

const rootElement = document.getElementById('app');
ReactDOM.render(<App />, rootElement);
