import React from 'react';
import './Question.scss';
import QuestionTypeSelector from './QuestionTypeSelector';

import RadioQuestion from './RadioQuestion';
import DefaultQuestionState from './DefaultQuestionState';
import ScaleQuestion from './ScaleQuestion';
import TextArea from './TextArea';

function Question({ questionIndex, questions, setQuestions, question }) {
  const [questionType, setQuestionType] = React.useState(
    question != null ? question.type : '--выбери тип--',
  );

  return (
    <div className="question-card">
      <div className="questions-card-title">
        <p className="question-number">Вопрос {questionIndex + 1}</p>{' '}
        <QuestionTypeSelector questionType={questionType} setQuestionType={setQuestionType} />
        <div
          className="delete-question-button"
          onClick={() => {
            const updatedQuestions = questions.filter((_, i) => i !== questionIndex);
            setQuestions(updatedQuestions);
          }}>
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 8L6 2H16V14H6L0 8ZM6.79289 6.20711L8.58579 8L6.79289 9.79289L8.20711 11.2071L10 9.41421L11.7929 11.2071L13.2071 9.79289L11.4142 8L13.2071 6.20711L11.7929 4.79289L10 6.58579L8.20711 4.79289L6.79289 6.20711Z"
              fill="#ec5b5b"
            />
          </svg>
        </div>
      </div>
      <div className="divider-line" />

      {renderQuestion(questionType, setQuestions, questionIndex, questions, question)}
    </div>
  );
}

function renderQuestion(questionType, setQuestions, questionIndex, questions, question) {
  if (questionType === 'radio' || questionType === 'checkbox') {
    return (
      <RadioQuestion
        setQuestions={setQuestions}
        questionIndex={questionIndex}
        questions={questions}
        questionType={questionType}
        question={question}
      />
    );
  } else if (questionType === 'scale') {
    return (
      <ScaleQuestion
        setQuestions={setQuestions}
        questionIndex={questionIndex}
        questions={questions}
        question={question}
      />
    );
  } else if (questionType === 'textarea') {
    return (
      <TextArea
        questions={questions}
        setQuestions={setQuestions}
        questionIndex={questionIndex}
        question={question}
      />
    );
  } else {
    return <DefaultQuestionState questionType={questionType} />;
  }
}

export default Question;
