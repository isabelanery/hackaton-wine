import React from 'react';
import WineBoxGift from './WineBoxGift';
import '../css/WineBox.css';

function WineBox() {
  const items = [
    {
      img: 'https://www.wine.com.br/-resources/components/clubewine/conteudo-winebox/img/dois-vinhos.png',
      title: '2 vinhos',
      description: 'Você receberá duas garrafas selecionadas pelos nossos WineHunters.',
    },
    {
      img: 'https://www.wine.com.br/-resources/components/clubewine/conteudo-winebox/img/revista.png',
      title: '1 revista',
      description: 'Conteúdo exclusivo para Sócios, como harmonizações, dicas e curiosidades sobre o mundo do vinho.',
    },
    {
      img: 'https://www.wine.com.br/-resources/components/clubewine/conteudo-winebox/img/corta-gotas.png',
      title: '1 corta-gotas',
      description: 'Todo mês uma arte diferente para você colecionar e servir seu vinho sem desperdiçar nem uma gota!',
    },
  ];

  return (
    <div className="wine-box-container">
      <h2>O que vai dentro da sua WineBox?</h2>
      <section className="wine-box-gifts">
        {
          items.map((item) => <WineBoxGift data={item} key={item.title} />)
        }
      </section>
    </div>
  );
}

export default WineBox;
