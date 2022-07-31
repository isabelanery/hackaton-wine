import React, { useEffect, useState } from 'react';
import fetchPlans from '../services/planServices';
import WinePlansCard from './cards/WinePlansCard';

function WinePlans() {
  const [plans, setPlans] = useState([]);
  const [fullPlans, setfullPlans] = useState({});
  useEffect(() => {
    const requestPlans = async () => {
      const planos = await fetchPlans();
      setPlans(planos.plans);
      setfullPlans(planos);
    };
    requestPlans();
  }, []);
  return (
    <div>
      <div>{fullPlans.name}</div>
      <div>{fullPlans.description}</div>
      {plans.length !== 0 && plans.map((plan) => <WinePlansCard key={plan.id} data={plan} />)}
    </div>
  );
}

export default WinePlans;
