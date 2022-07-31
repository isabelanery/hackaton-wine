import React from 'react';
import PlanStepCard from './cards/PlanStepCard';
import '../css/PlansExplanation.css';

// import step1 from '../images/escolhaoplano.svg';
// import step2 from '../images/curadoria.svg';
// import step3 from '../images/recebaemcasa.svg';
// import step4 from '../images/celebrate.svg';

function PlansExplanation() {
  const plans = [
    {
      step: '1',
      title: 'Você escolhe!',
      img: 'https://www.wine.com.br/-resources/components/clubewine/como-funciona/img/icon-01.png',
      // img: step1,
      content: 'São 6 Clubes diferentes, e você escolhe a WineBox que mais combina com você.',
    },
    {
      step: '2',
      title: 'Curadoria',
      img: 'https://www.wine.com.br/-resources/components/clubewine/como-funciona/img/icon-02.png',
      // img: step2,
      content: 'Nossos Winehunters recebem amostras de exemplares e fazem diversas análises para seleção dos melhores vinhos.',
    },
    {
      step: '3',
      title: 'Comodidade',
      img: 'https://www.wine.com.br/-resources/components/clubewine/como-funciona/img/icon-03.png',
      // img: step3,
      content: 'Todo mês, você recebe a sua WineBox no local que escolher.',
    },
    {
      step: '4',
      title: 'Aproveite!',
      img: 'https://www.wine.com.br/-resources/components/clubewine/como-funciona/img/icon-04.png',
      // img: step4,
      content: 'Viva experiências incríveis e brinde à vida com os melhores vinhos!',
    },
  ];

  return (
    <div className="plans-explanation-container">
      <div className="plan-explanation-intro">
        <h2>
          Entenda como funciona:
        </h2>

        <p>
          No Clube Wine você recebe, todo mês,
          2 rótulos escolhidos a dedo das melhores vinícolas do mundo!
        </p>
      </div>

      <section className="plan-steps">
        {
          plans.map((plan) => <PlanStepCard plan={plan} key={plan.step} />)
        }
      </section>

    </div>
  );
}

export default PlansExplanation;
