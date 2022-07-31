import React from 'react';
import { number, shape, string } from 'prop-types';

function WinePlansCard(props) {
  const { data } = props;
  const {
    name, price, priceWithDiscount, gift, promotion,
  } = data;

  return (
    <div>
      <section className="card-wrapper">
        <div>{name}</div>
        <div>{price}</div>
        <div>{priceWithDiscount}</div>
        <div>{promotion}</div>
        <div>{gift}</div>
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
