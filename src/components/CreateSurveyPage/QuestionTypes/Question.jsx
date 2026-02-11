import React from 'react';
import './Question.scss';
import QuestionTypeSelector from './QuestionTypeSelector';

import RadioQuestion from './RadioQuestion';
import DefaultQuestionState from './DefaultQuestionState';
import ScaleQuestion from './ScaleQuestion';
import TextArea from './TextArea';

function Question({ questionIndex, questions, setQuestions }) {
  const [questionType, setQuestionType] = React.useState('--выбери тип--');

  return (
    <div className="question-card">
      <div className="questions-card-title">
        <p className="question-number">Вопрос {questionIndex + 1}</p>{' '}
        <QuestionTypeSelector questionType={questionType} setQuestionType={setQuestionType} />
      </div>
      <div className="divider-line" />

      {renderQuestion(questionType, setQuestions, questionIndex, questions)}
    </div>
  );
}

function renderQuestion(questionType, setQuestions, questionIndex, questions) {
  if (questionType === 'radio' || questionType === 'checkbox') {
    return (
      <RadioQuestion
        setQuestions={setQuestions}
        questionIndex={questionIndex}
        questions={questions}
        questionType={questionType}
      />
    );
  } else if (questionType === 'scale') {
    return (
      <ScaleQuestion
        setQuestions={setQuestions}
        questionIndex={questionIndex}
        questions={questions}
      />
    );
  } else if (questionType === 'textarea') {
    return (
      <TextArea questions={questions} setQuestions={setQuestions} questionIndex={questionIndex} />
    );
  } else {
    return <DefaultQuestionState questionType={questionType} />;
  }
}

export default Question;
