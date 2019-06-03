import React from 'react';
import ReactDOM from 'react-dom';
import nx from 'next-js-core2';
import './assets/styles/index.scss';

function App() {
  console.log(nx, nx.VERSION);
  return (
    <div className="clearfix container">
      <h1>Hello readers!</h1>
      <span className="r">RIGHT</span>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
