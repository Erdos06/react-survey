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
