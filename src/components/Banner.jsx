import React from 'react';
import '../css/Banner.css';

function Banner() {
  return (
    <div className="banner-container">

      <div className="wrapper">
        <h1>Wine</h1>

        <h2>
          O maior clube de assinaturas de vinho
          <span className="bold"> do mundo</span>
          !
        </h2>
      </div>
    </div>
  );
}

export default Banner;
