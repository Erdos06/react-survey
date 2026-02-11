import './AddQuestion.scss';

import Question from './Question';

function AddQuestion({ addQuestion, questionIndex }) {
  return (
    <div className="add-question-card">
      <div className="add-questions-card-title">
        <p className="add-question-number">Вопрос {questionIndex}</p>
        <button className="add-question-button" onClick={addQuestion} type="button">
          Добавить вопрос
        </button>
      </div>
    </div>
  );
}

export default AddQuestion;
