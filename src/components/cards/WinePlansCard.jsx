import React from 'react';
import { number, shape, string } from 'prop-types';

function WinePlansCard(props) {
  const { data } = props;
  const {
    name, price, priceWithDiscount, gift, promotion,
  } = data;

  return (
    <div>
      <section>
        <div>{name}</div>
        <div>{price}</div>
        <div>{priceWithDiscount}</div>
        <div>{gift}</div>
        <div>{promotion}</div>
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
