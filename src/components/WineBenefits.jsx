import React from 'react';
import WineBenefitCard from './WineBenefitCard';
import '../css/WineBenefits.css';

function WineBenefits() {
  const benefits = [
    {
      id: 1,
      icon: 'https://www.wine.com.br/-resources/components/clubewine/beneficios/img/icon-01.svg',
      content: '15% OFF em todas as compras',
    },
    {
      id: 2,
      icon: 'https://www.wine.com.br/-resources/components/clubewine/beneficios/img/icon-02.svg',
      content: 'Ganhe 3x mais cashback em qualquer compra',
    },
    {
      id: 3,
      icon: 'https://www.wine.com.br/-resources/components/clubewine/beneficios/img/icon-03.svg',
      content: 'Taxa de entrega diferenciada',
    },
    {
      id: 4,
      icon: 'https://www.wine.com.br/-resources/components/clubewine/beneficios/img/icon-04.svg',
      content: 'Ganhe brinds + cashbacks indicando amigos',
    },
  ];

  return (
    <div className="wine-benefits-container">
      <h2>Como Sócio Wine, você garante benefícios exclusivos</h2>
      <section className="wine-benefits-wrapper">
        {
          benefits.map((benefit) => <WineBenefitCard data={benefit} key={benefit.id} />)
        }
      </section>
    </div>
  );
}

export default WineBenefits;
