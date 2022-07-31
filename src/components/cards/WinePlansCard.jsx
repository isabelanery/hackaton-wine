import React from 'react';
import { number, shape, string } from 'prop-types';

function WinePlansCard(props) {
  const { data } = props;
  const {
    name, price, priceWithDiscount, gift, promotion,
  } = data;

  return (
    <div className="wine-plan-card-container">
      <section className="card-wrapper">
        <h5>{name}</h5>
        <p>
          De:
          <span className="tachado">
            {price}
          </span>
        </p>
        <p>
          Por apenas:
          <span className="bold">
            {priceWithDiscount}
          </span>
        </p>
        <p>{promotion}</p>
        <p>{gift}</p>

        <button type="button">Assine agora!</button>
      </section>
    </div>
  );
}

WinePlansCard.propTypes = {
  data: shape({
    name: string,
    price: number,
    priceWithDiscount: number,
    gift: string,
    promotions: string,
  }),
}.isRequired;

export default WinePlansCard;
