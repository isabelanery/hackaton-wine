import React from 'react';
import PlanStepCard from './PlanStepCard';
import '../css/PlansExplanation.css';

function PlansExplanation() {
  const plans = [
    {
      step: '1',
      title: 'Você escolhe!',
      content: '',
    },
    {
      step: '2',
      title: 'Curadoria',
      content: '',
    },
    {
      step: '3',
      title: 'Comodidade',
      content: '',
    },
    {
      step: '4',
      title: 'Aproveite!',
      content: '',
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
