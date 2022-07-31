import React from 'react';
import 'slick-carousel/slick/slick.css';
import '../css/GetToKnow.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import fig1 from '../images/carousel1.png';
import fig2 from '../images/carousel2.png';
import fig3 from '../images/carousel3.png';
import fig4 from '../images/carousel4.png';
import fig5 from '../images/carousel5.png';

function GetToKnow() {
  return (
    <div className="carousel-container">
      <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
        <div><img src={fig1} alt="" /></div>
        <div><img src={fig2} alt="" /></div>
        <div><img src={fig3} alt="" /></div>
        <div><img src={fig4} alt="" /></div>
        <div><img src={fig5} alt="" /></div>
      </Slider>
    </div>
  );
}

export default GetToKnow;
