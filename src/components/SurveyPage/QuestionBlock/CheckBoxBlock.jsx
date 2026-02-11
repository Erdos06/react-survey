import React from 'react';
import OptionCheckBoxBlock from '../OptionBlock/OptionCheckboxBlock';

function CheckBoxBlock({ question, index }) {
  return (
    <div className="question-card active">
      <div className="question-header">
        <span className="question-number">Вопрос {index + 1}</span>
        <h2 className="question-text">{question.text}</h2>
        <p className="question-hint">Можно выбрать несколько вариантов</p>
      </div>

      <div className="options-container">
        {question.options.map((option, idx) => (
          <OptionCheckBoxBlock key={idx} option={option} />
        ))}
      </div>
    </div>
  );
}

export default CheckBoxBlock;
