const fetchPlans = async () => {
  const response = await fetch('https://wine-club-proxy.herokuapp.com/modalities');
  const data = await response.json();
  return data[0].plans;
};

export default fetchPlans;
