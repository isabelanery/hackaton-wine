import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function GetToKnow() {
  return (
    <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
      <div>1</div>
      <div>2</div>
    </Slider>
  );
}

export default GetToKnow;
