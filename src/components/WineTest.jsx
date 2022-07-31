import React from 'react';
import curadoria from '../images/curadoria.svg';
import '../css/WineTest.css';

function WineTest() {
  return (
    <div className="test-card-container">
      <div className="test-card-wrapper color-magenta">
        <img src={curadoria} alt="curadoria" />

        <div className="test-card-content">
          <h3>Começando agora?</h3>
          <p>Descubra os vinhos ideais para você!</p>
          <button type="button">Faça o teste!</button>

        </div>
      </div>
    </div>
  );
}

export default WineTest;
