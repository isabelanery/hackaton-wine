import React from 'react';
import questionImage from '../images/anyquestions.svg';
import '../css/AnyQuestions.css';

function AnyQuestions() {
  return (
    <div className="any-questions-container">
      <section className="any-questions-wrapper">
        <img src={questionImage} alt="Pessoa em dúvida" className="any-questions-img" />
        <div className="question-content">
          <h2>Tem alguma dúvida?</h2>
          <h3>Veja as perguntas mais frenquentes, ou entre em contato conosco</h3>
          <button type="button">Clicando Aqui!</button>
        </div>
      </section>
    </div>
  );
}

export default AnyQuestions;
