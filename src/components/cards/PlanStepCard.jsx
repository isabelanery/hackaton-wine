import React from 'react';
import PropTypes from 'prop-types';
import '../../css/PlanStepCard.css';

function PlanStepCard(props) {
  const {
    plan: {
      title, content, img,
    },
  } = props;

  return (
    <div className="card-explanation-container">

      {/* <h3>
        { step }
      </h3> */}
      <img src={img} alt="" className="plan-step-img" />

      <div className="plan-step-description">
        <h3>
          { title }
        </h3>

        <p>
          { content }
        </p>
      </div>
    </div>
  );
}

PlanStepCard.propTypes = {
  step: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
}.isRequired;

export default PlanStepCard;
