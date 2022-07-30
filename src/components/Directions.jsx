import React from 'react';
import DirectionCard from './DirectionCard';
import '../css/Directions.css';

function Directions() {
  const directions = [
    {
      icon: 'https://img.wine.com.br/component/home-clube/products-section-icon.svg',
      title: 'Descontos',
      description: 'Conheça os nossos descontos em toda loja para sócios Wine.',
      color: '1',
    },
    {
      icon: 'https://img.wine.com.br/component/home-clube/worldwide-section-icon.svg',
      title: 'Vinhos pelo mundo',
      description: 'Experimente os vinhos mais incríveis ao redor do mundo!',
      color: '2',
    },
    {
      icon: 'https://img.wine.com.br/component/home-clube/benefits-icon.svg',
      title: 'Harmonização',
      description: 'Descubra as melhores harmonizações para seu prato favorito.',
      color: '3',
    },
    {
      icon: 'https://img.wine.com.br/component/home-clube/producers-section-icon.svg',
      title: 'Conheça o aplicativo',
      description: 'Baixe nosso aplicativo para comprar vinhos com um clique.',
      color: '4',
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
