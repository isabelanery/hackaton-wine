import { shape, string } from 'prop-types';
import React from 'react';

function WineBenefitCard(props) {
  const { data: { icon, content } } = props;

  return (
    <div className="wine-benefit-card">
      <img src={icon} alt={content} className="wine-benefit-icon" />
      <p>{ content }</p>
    </div>
  );
}

WineBenefitCard.propTypes = {
  data: shape({
    icon: string,
    content: string,
  }),
}.isRequired;

export default WineBenefitCard;
