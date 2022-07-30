import { shape, string } from 'prop-types';
import React from 'react';

function DirectionCard(props) {
  const {
    data: {
      icon, title, description, color,
    },
  } = props;

  return (
    <div className={`direction-card color-${color}`}>
      <img src={icon} alt={title} />
      <h3>{ title }</h3>
      <p>{ description }</p>
    </div>
  );
}

DirectionCard.propTypes = {
  data: shape({
    icon: string,
    title: string,
    description: string,
    color: string,
  }),
}.isRequired;

export default DirectionCard;
