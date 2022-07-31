import React from 'react';
import escolha from '../images/escolhaoplano.svg';
import '../css/WineYou.css';

function WineYou() {
  return (
    <div className="wine-you-card-container">
      <div className="wine-you-card-wrapper color-orange">
        <img src={escolha} alt="escolha" />

        <div className="wine-you-card-content">
          <h3>WINEYOU</h3>
          <p>
            Você é livre para escolher seus vinhos. Veja nossas opções de planos personalizados.
          </p>
          <button type="button">Saiba Mais</button>
        </div>
      </div>
    </div>
  );
}

export default WineYou;
