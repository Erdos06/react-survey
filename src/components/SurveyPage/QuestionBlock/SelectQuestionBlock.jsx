function SelectQuestionBlock({ question, index }) {
  return (
    <div class="question-card active">
      <div class="question-header">
        <span class="question-number">Вопрос {index + 1}</span>
        <h2 class="question-text">{question.text}</h2>
      </div>

      <div class="select-container">
        <select class="custom-select">
          <option value="" disabled selected>
            Выберите вариант...
          </option>

          {question.options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.text}
            </option>
          ))}
        </select>
        <div class="select-arrow">
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default SelectQuestionBlock;
