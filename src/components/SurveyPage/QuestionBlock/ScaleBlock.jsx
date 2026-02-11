function ScaleBlock({ index, question }) {
  return (
    <div className="question-card active">
      <div className="question-header">
        <span className="question-number">
          Вопрос {index + 1} <span className="required">*</span>
        </span>
        <h2 className="question-text">{question.text}</h2>
        <p className="question-hint">По шкале от 1 до 5</p>
      </div>

      <div className="scale-container">
        <div className="scale-labels">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i + 1} <br />
              {question.options[i].optionText}
            </span>
          ))}
        </div>

        <div className="scale-options">
          <label className="scale-option">
            <input type="radio" name="question3" value="1" />
            <span className="scale-number">1</span>
          </label>

          <label className="scale-option">
            <input type="radio" name="question3" value="2" />
            <span className="scale-number">2</span>
          </label>

          <label className="scale-option">
            <input type="radio" name="question3" value="3" />
            <span className="scale-number">3</span>
          </label>

          <label className="scale-option">
            <input type="radio" name="question3" value="4" />
            <span className="scale-number">4</span>
          </label>

          <label className="scale-option">
            <input type="radio" name="question3" value="5" />
            <span className="scale-number">5</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default ScaleBlock;
