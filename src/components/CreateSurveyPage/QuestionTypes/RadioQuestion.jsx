import React from 'react';

import Option from './Options';

function RadioQuestion({ setQuestions, questionIndex, questionType, question }) {
  const [questionText, setQuestionText] = React.useState(question != null ? question.text : '');
  const [options, setOptions] = React.useState(question != null ? question.options : ['', '']);

  React.useEffect(() => {
    setQuestions((prev) =>
      prev.map((q, index) =>
        index === questionIndex
          ? {
              ...q,
              text: questionText,
              type: questionType,
              required: true,
              options: options,
            }
          : q,
      ),
    );
  }, [questionText, options, questionIndex, setQuestions, questionType]);

  return (
    <div className="question-card-content">
      <label className="question-text-label">
        <p>Текст вопроса:</p>
        <input
          type="text"
          name="questionText"
          placeholder="Введите текст вопроса"
          className="question-text-name"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
      </label>
      <div className="options-section">
        <p className="options-label">
          Варианты ответа:
          <button
            type="button"
            className="add-option-button"
            onClick={() => addOption(options, setOptions)}>
            Добавить вариант
          </button>
        </p>
        <div className="options-container">
          {options.map((option, index) => {
            return (
              <Option
                option={option}
                index={index}
                setOptions={setOptions}
                options={options}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

function addOption(options, setOptions) {
  setOptions([...options, '']);
}

export default RadioQuestion;
