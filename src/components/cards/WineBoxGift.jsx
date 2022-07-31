import { shape, string } from 'prop-types';
import React from 'react';

function WineBoxGift(props) {
  const { data: { img, title, description } } = props;

  return (
    <div className="wine-box-gift-container">
      <div className="wine-box-gift-img">
        <img src={img} alt={title} />
      </div>
      <div className="wine-box-gift-content">
        <h3>{ title }</h3>
        <p>{ description }</p>
      </div>
    </div>
  );
}

WineBoxGift.propTypes = {
  data: shape({
    img: string,
    title: string,
    description: string,
  }),
}.isRequired;

export default WineBoxGift;
