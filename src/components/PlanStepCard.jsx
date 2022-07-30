import React from 'react';
import PropTypes from 'prop-types';

function PlanStepCard(props) {
  const { plan: { step, title, content } } = props;

  return (
    <div>
      <h3>
        { step }
      </h3>
      Icon
      <h3>
        { title }
      </h3>

      <p>
        { content }
      </p>
    </div>
  );
}

PlanStepCard.propTypes = {
  step: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
}.isRequired;

export default PlanStepCard;
