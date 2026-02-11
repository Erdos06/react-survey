import OptionRadioBlock from '../OptionBlock/OptionRadioBlock';

function RadioQuestionBlock({ index, question }) {
  return (
    <div className="question-card active">
      <div className="question-header">
        <span className="question-number">
          Вопрос {index + 1} <span className="required">*</span>
        </span>
        <h2 className="question-text">{question.text}</h2>
        <p className="question-hint">Выберите один вариант</p>
      </div>

      <div className="options-container">
        {question.options.map((option, index) => (
          <OptionRadioBlock key={index} option={option} />
        ))}
      </div>
    </div>
  );
}
export default RadioQuestionBlock;
