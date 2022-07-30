import React from 'react';
import Banner from '../components/Banner';
import Directions from '../components/Directions';
import PlansExplanation from '../components/PlansExplanation';
import WineBenefits from '../components/WineBenefits';
import WineBox from '../components/WineBox';
import WineOptions from '../components/WineOptions';

function LandingPage() {
  return (
    <div>
      <Banner />
      <PlansExplanation />
      <WineBox />
      <WineBenefits />
      <WineOptions />
      <Directions />
    </div>
  );
}

export default LandingPage;
