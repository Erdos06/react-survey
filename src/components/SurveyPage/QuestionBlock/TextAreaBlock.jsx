import React from 'react';

function TextAreaBlock({ index, question }) {
  const [reply, setReply] = React.useState('');

  return (
    <div className="question-card active">
      <div className="question-header">
        <span className="question-number">
          Вопрос {index + 1} <span className="required">*</span>
        </span>
        <h2 className="question-text">{question.text}</h2>
        <p className="question-hint">Ваши идеи очень важны для нас</p>
      </div>

      <div className="text-input-container">
        <textarea
          className="text-input"
          placeholder="Напишите свои предложения здесь..."
          rows="5"
          value={reply}
          onChange={(e) => setReply(e.target.value)}></textarea>
        <div className="char-counter">
          Осталось символов: <span className="char-count">{1000 - reply.length}</span>
        </div>
      </div>
    </div>
  );
}

export default TextAreaBlock;
