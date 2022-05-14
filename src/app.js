import React from "react";

const App = () => {
  const img = require('./assets/images/007S8ZIlgy1gexw87htqhj305k05k74o.jpg');
  return (
    <div>
      <img src={img} alt=""/>
      <h1>Hello React</h1>
      <p>I am aric, from <strong>wuhan</strong> province.</p>
    </div>
  )
}

export default App;
