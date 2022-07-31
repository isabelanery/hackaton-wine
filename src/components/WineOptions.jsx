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
      {/* reescrever e nome dos botões, não sei se tá mt legal \/ */}
      <h3>Há quanto tempo / o quanto você aprecia vinhos?</h3>

      <div className="wine-options-buttons">
        <button className="color-magenta" type="button" name="test" onClick={handleClick}>
          Estou iniciando agora...
        </button>
        <button className="color-turquoise" type="button" name="plans" onClick={handleClick}>
          Gosto! Quero ver os planos
        </button>
        <button className="color-orange" type="button" name="wineYou" onClick={handleClick}>
          Amo! Quero escolher meus vinhos
        </button>
      </div>
      { optionSelected !== '' && componentOption[optionSelected] }
    </div>
  );
}

export default WineOptions;
