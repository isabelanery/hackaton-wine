import React from 'react';
import AnyQuestions from '../components/AnyQuestions';
import Banner from '../components/Banner';
import Directions from '../components/Directions';
import GetToKnow from '../components/GetToKnow';
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
      <AnyQuestions />
      <GetToKnow />
    </div>
  );
}

export default LandingPage;
