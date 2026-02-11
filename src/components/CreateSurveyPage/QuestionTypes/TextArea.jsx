import React from 'react';

import './TextArea.scss';

function TextArea({ questions, setQuestions, questionIndex }) {
  const [questionText, setQuestionText] = React.useState('');

  React.useEffect(() => {
    setQuestions((prev) =>
      prev.map((q, index) =>
        index === questionIndex
          ? {
              ...q,
              text: questionText,
              type: 'textarea',
              required: true,
              options: null,
            }
          : q,
      ),
    );
  }, [questionText, questionIndex, setQuestions]);

  return (
    <label className="question-text-label-text-area">
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
  );
}

export default TextArea;
