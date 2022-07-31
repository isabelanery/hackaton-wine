import React from 'react';
import DirectionCard from './cards/DirectionCard';
import '../css/Directions.css';

function Directions() {
  const directions = [
    {
      icon: 'https://img.wine.com.br/component/home-clube/products-section-icon.svg',
      title: 'Descontos',
      description: 'Conheça os nossos descontos em toda loja para sócios Wine.',
      color: 'magenta',
    },
    {
      icon: 'https://img.wine.com.br/component/home-clube/worldwide-section-icon.svg',
      title: 'Vinhos pelo mundo',
      description: 'Experimente os vinhos mais incríveis ao redor do mundo!',
      color: 'orange',
    },
    {
      icon: 'https://img.wine.com.br/component/home-clube/benefits-icon.svg',
      title: 'Harmonização',
      description: 'Descubra as melhores harmonizações para seu prato favorito.',
      color: 'magenta-darker',
    },
    {
      icon: 'https://img.wine.com.br/component/home-clube/producers-section-icon.svg',
      title: 'Conheça nossas lojas',
      description: 'Baixe nosso aplicativo para comprar vinhos da onde você estiver.',
      color: 'turquoise',
    },
  ];

  return (
    <div className="directions-container">
      <section className="directions-wrapper">
        {
          directions.map((item) => <DirectionCard data={item} />)
        }
      </section>
    </div>
  );
}

export default Directions;
