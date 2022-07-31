import React, { useEffect, useState } from 'react';
import fetchPlans from '../services/planServices';

function WinePlans() {
  const [plans, setPlans] = useState([]);
  useEffect(async () => {
    const planos = await fetchPlans();
    setPlans(planos);
  }, []);
  return (
    <p>
      descubra os planos disponíveis
    </p>
  );
}

export default WinePlans;
