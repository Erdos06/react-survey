import React from 'react';

import './ScaleQuestion.scss';
import ScaleLabel from './ScaleLabel';

function ScaleQuestion({ questionIndex, setQuestions, question }) {
  const [options, setOptions] = React.useState(
    question != null ? question.options : ['', ', ', '', '', ''],
  );
  const [questionText, setQuestionText] = React.useState(question != null ? question.text : '');

  React.useEffect(() => {
    setQuestions((prev) =>
      prev.map((q, index) =>
        index === questionIndex
          ? {
              ...q,
              text: questionText,
              type: 'scale',
              required: true,
              options: options,
            }
          : q,
      ),
    );
  }, [questionText, options, questionIndex, setQuestions]);

  return (
    <div className="scale-question-content">
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

      <div className="scale-options-create">
        {options.map((o, index) => {
          return <ScaleLabel index={index} key={index} options={options} setOptions={setOptions} />;
        })}
      </div>
    </div>
  );
}

export default ScaleQuestion;
