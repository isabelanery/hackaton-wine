import React from 'react';
import PlanStepCard from './cards/PlanStepCard';
import '../css/PlansExplanation.css';

import step1 from '../images/escolhaoplano.svg';
import step2 from '../images/curadoria.svg';
import step3 from '../images/recebaemcasa.svg';
import step4 from '../images/celebrate.svg';

function PlansExplanation() {
  const plans = [
    {
      step: '1',
      title: 'Você escolhe!',
      img: step1,
      content: 'São 6 Clubes diferentes, e você escolhe a WineBox que mais combina com você.',
    },
    {
      step: '2',
      title: 'Curadoria',
      img: step2,
      content: 'Nossos Winehunters recebem amostras de exemplares e fazem diversas análises para seleção dos melhores vinhos.',
    },
    {
      step: '3',
      title: 'Comodidade',
      img: step3,
      content: 'Todo mês, você recebe a sua WineBox no local que escolher.',
    },
    {
      step: '4',
      title: 'Aproveite!',
      img: step4,
      content: 'Viva experiências incríveis e brinde à vida com os melhores vinhos!',
    },
  ];

  // const [plans, setPlans] = useState([]);

  // useEffect(() => {
  //   console.log(options);
  //   setPlans(options);
  // }, []);

  return (
    <div className="plans-explanation-container">

      <section className="plan-steps">
        {
          plans.map((plan) => <PlanStepCard plan={plan} key={plan.step} />)
        }
      </section>

    </div>
  );
}

export default PlansExplanation;
