import React from 'react';
import escolha from '../images/escolhaoplano.svg';

function WineYou() {
  return (
    <div className="direction-card color-orange">
      <div>
        <img src={escolha} alt="escolha" />
        <h3>WINEYOU</h3>
      </div>
      <p>Você é livre para escolher seus vinhos. Veja nossas opções de planos personalizados.</p>
      <button type="button">Saiba Mais</button>
    </div>
  );
}

export default WineYou;
