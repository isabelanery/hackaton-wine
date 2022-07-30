import React, { useState } from 'react';
import WinePlans from './WinePlans';
import WineTest from './WineTest';
import WineYou from './WineYou';
import '../css/WineOptions.css';

function WineOptions() {
  const [optionSelected, setOptionSelected] = useState('');

  const componentOption = {
    test: <WineTest />,
    plans: <WinePlans />,
    wineYou: <WineYou />,
  };

  const handleClick = ({ target: { name } }) => {
    if (name !== optionSelected) {
      setOptionSelected(name);
    } else {
      setOptionSelected('');
    }
  };

  return (
    <div className="wine-options-container">
      <div className="wine-options-button">
        <button type="button" name="test" onClick={handleClick}>
          Sou iniciante
        </button>
        <button type="button" name="plans" onClick={handleClick}>
          Quero ver os planos
        </button>
        <button type="button" name="wineYou" onClick={handleClick}>
          Quero escolher meus vinhos
        </button>
      </div>
      { optionSelected !== '' && componentOption[optionSelected] }
    </div>
  );
}

export default WineOptions;
