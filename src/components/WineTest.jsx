import React from 'react';
import curadoria from '../images/curadoria.svg';
import '../css/DirectionCard.css';

function WineTest() {
  return (
    <div className="direction-card color-magenta">
      <div>
        <img src={curadoria} alt="curadoria" />
        <h3>Começando agora?</h3>
        <p>Descubra os vinhos ideais para você!</p>
        <button type="button">Faça o teste!</button>
      </div>
    </div>
  );
}

export default WineTest;
